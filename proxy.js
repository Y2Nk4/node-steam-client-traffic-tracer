let net = require('net'),
    urlParser = require('url'),
    WebSocket = require('ws'),
    http = require('http'),
    SteamMessageParser = require('./parser'),
    fs = require('fs'),
    parser = require('./parser')

const proxyCore = {
    proxy: {
        tunnel: {
            // To filter out and forward the non-steam traffic
            connect: (ctx) => new Promise((resolve, reject) => {
                if(ctx.decision === 'close') return reject(ctx.error = ctx.decision)
                let { req, socket, head } = ctx

                let url = urlParser.parse('https://' + req.url)
                console.log('TUNNEL: regular traffic, forwarding', req.url)
                let tunnelSocket = net.connect(url.port, url.hostname)
                    .on('connect', () => resolve(ctx.proxySocket = tunnelSocket))
                    .on('error', error => {
                        console.log('error', error)
                        proxyCore.proxy.tunnel.close(ctx)
                        return reject()
                    })
            }),
            dock: ctx => new Promise(resolve => {
                const req = ctx.req
                const socket = ctx.socket
                socket
                    .once('data', data => resolve(ctx.head = Buffer.concat([ctx.head, data])))
                    .once('error', error => proxyCore.proxy.tunnel.close(ctx, error))
                    .write(`HTTP/${req.httpVersion} 200 Connection established\r\n\r\n`)
            }),
            pipe: ctx => {
                if(ctx.decision === 'blank') return Promise.reject(ctx.error = ctx.decision)
                const { head, socket } = ctx
                const proxySocket = ctx.proxySocket.on('error', (error) => {
                    console.log('proxy socket error', error)
                    return proxyCore.proxy.tunnel.abort(ctx.proxySocket, 'proxySocket')
                })
                proxySocket.write(head)
                socket.pipe(proxySocket).pipe(socket)
            },
            close: (ctx, error) => {
                console.log('Connection Closed', error ? `due to ${error.code}` : '')
                proxyCore.proxy.tunnel.abort(ctx.socket, 'tunnel')
            },
            abort: (socket, from) => {
                console.log('call abort', from)
                if(socket) socket.end()
                if(socket && !socket.destroyed) socket.destroy()
            },
        },

        request: {
            request: ctx => new Promise((resolve, reject) => {
                if (ctx.decision === 'close') return reject(ctx.error = ctx.decision)
                const req = ctx.req
                const url = urlParser.parse(req.url)

                ctx.req.socket.on('error', (error) => {
                    console.log('http proxy:error', error)
                    proxyCore.proxy.tunnel.close(ctx, error)
                })
                ctx.req.socket.on('error', (error) => {
                    console.log('http proxy:error', error)
                    ctx.res.end()
                })

                let proxyRequest = http.request({
                    hostname: url.hostname,
                    port: url.port,
                    path: url.path,
                    method: ctx.req.method,
                    headers: ctx.req.headers
                }, function (res) {
                    ctx.res.writeHead(res.statusCode, res.headers)
                    res.pipe(ctx.res, {
                        end: true
                    })
                });

                ctx.req.pipe(proxyRequest, {
                    end: true
                });
            }),
        },

        mitm: {
            fakeMITMServer: (ctx, MITMPort) =>  new Promise((resolve, reject) => {
                let { req, socket, head } = ctx
                console.log('HTTPProxy: Captured Traffic toward Steam CM Server', req.url)
                console.log('HTTPProxy: handleTunnel', req.headers, MITMPort)
                const targetSocket = net.connect(MITMPort, '127.0.0.1', () => {
                    // 通知客户端已经建立连接
                    socket.write(
                        `HTTP/${req.httpVersion} 200 Connection Established\r\n`
                        + 'Proxy-agent: MITM-proxy\r\n'
                        + '\r\n',
                    );
                    console.log('HTTPProxy: Establishing Connection')
                    // 建立通信隧道，转发数据
                    targetSocket.write(head);
                    socket.pipe(targetSocket).pipe(socket);
                })

                targetSocket.on('error', (error) => {
                    console.log('targetSocket error', error)
                })
                socket.on('error', (error) => {
                    console.log('clientSocket error', error)
                })
            }),
        }
    },
    httpProxy: {
        core: {
            handleTunnel(req, socket, head) {
                let ctx = { req, socket, head }
                if (req.url && req.url.indexOf('.cm.steampowered.com') !== -1) {
                    // If the host is to *.cm.steampowered.com
                    // the traffic will be handled by the next middleware - fakeMITMServer
                    Promise.resolve()
                        .then(() => proxyCore.proxy.mitm.fakeMITMServer(ctx, this.fakeServerPort))
                } else {
                    Promise.resolve()
                        .then(() => proxyCore.proxy.tunnel.connect(ctx))
                        .then(() => proxyCore.proxy.tunnel.dock(ctx))
                        .then(() => proxyCore.proxy.tunnel.pipe(ctx))
                        .catch((error) => {
                            console.log('httpProxy Middleware Error', error)
                            return Promise.resolve()
                        })
                        // .then(() => module.exports.proxy.close(ctx))
                }
            },
            handleRequest(req, res) {
                console.log('PROXY:REQUEST: Regular Traffic, forwarding to', req.url)
                let ctx = { req, res }
                Promise.resolve()
                    .then(() => proxyCore.proxy.request.request(ctx))
                    .then(() => proxyCore.proxy.request.response(ctx))
                    .then(() => proxyCore.proxy.request.close(ctx))
                    .catch((error) => {
                        console.log('httpProxy Middleware Error', error)
                        return Promise.resolve()
                    })
            },
            handleConnection(clientRequest, clientSocket, head) {
                // console.log(clientRequest.connection)
                // console.log('client connect to proxy, received a socket')
            }
        },
    },
    fakeHTTPSServer: {
        core: {
            handleTunnel (req, socket, head) {
                let ctx = { req, socket, head }
                console.log('handleTunnel')
            },
            handleRequest (req, res) {
                console.log('handleRequest', req.headers)
                console.log('handleRequest')
                req.socket.on('error', (error) => {
                    console.log('fakeHTTPSServer socket error', error)
                })
                res.writeHead(200);
                res.end('Not Safe, connection is hijacked.\n');
            },
            handleConnection (clientRequest, clientSocket, head) {
                console.log(clientRequest.connection)
                console.log('fake: client connect to proxy, received a socket')
            },
            handleUpgrade (req, socket, head) {
                console.log('MITM Server: Handle Connection Upgrade', req.url)
                let wss = this.wss
                socket.on('error', (error) => {
                    console.log('Upgraded Socket Error', error)
                })
                wss.handleUpgrade(req, socket, head, function done(ws) {
                    wss.emit('connection', ws, req);
                });
            }
        },
    },
    wss: {
        core: {
            handleConnection (ws, req) {
                console.log(`wss://${req.headers.host}${req.url}`, req.headers)
                let steamWSS = new WebSocket(`wss://${req.headers.host}${req.url}`),
                    isConnectedToSteamOfficial = false,
                    displayWS = this.displayWS

                let connectToSteamOfficial = () => {
                    return new Promise((resolve, reject) => {
                        steamWSS.on('open', function open() {
                            isConnectedToSteamOfficial = true
                            console.log('Connected To Steam WSS Server, ready to redirect messages');
                            return resolve()
                        });
                        steamWSS.on('close', function close() {
                            console.log('Disconnected with Steam WSS Server');
                        });
                        steamWSS.on('message', function incoming(data) {
                            console.log('receiving msg from Steam, forwarding to Client')
                            ws.send(data)
                            try {
                                let result = parser.parseMessage(data, false)
                                if (result && !result.body.error) {
                                    displayWS.clients.forEach(function each(client) {
                                        if (client.readyState === WebSocket.OPEN) {
                                            client.send(JSON.stringify(result));
                                        }
                                    })
                                }
                            } catch (e) {
                                console.log('Error while parse steam traffic', e)
                            }
                            fs.appendFileSync('./message.dat', data)
                            fs.appendFileSync('./message.dat', '\r\n--splite')
                        });
                    });
                }
                ws.on('message', async function incoming(data) {
                    console.log('received msg from Client, forwarding to Steam Server');
                    if (!isConnectedToSteamOfficial) {
                        await connectToSteamOfficial()
                    }
                    steamWSS.send(data)
                    try {
                        let result = parser.parseMessage(data, true)
                        if (result && result.body && !result.body.error) {
                            displayWS.clients.forEach(function each(client) {
                                if (client.readyState === WebSocket.OPEN) {
                                    client.send(JSON.stringify(result));
                                }
                            })
                        }
                    } catch (e) {
                        console.log('Error while parse steam traffic', e)
                    }
                    fs.appendFileSync('./message.dat', data)
                    fs.appendFileSync('./message.dat', '\r\n--splite')
                });
            }
        }
    }
}

module.exports = proxyCore