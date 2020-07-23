let fs = require('fs'),
    proxy = require('./proxy'),
    display = require('./display'),
    http = require('http'),
    WebSocket = require('ws'),
    net = require('net'),
    koa = require('koa'),
    https = require('https');

const HTTP_PROXY_PORT = 10068
const HTTPS_PROXY_PORT = 10069
const FAKE_HTTPS_PORT = 10070
const HTTP_DISPLAY_SERVER_PORT = 8050

let privateKey  = fs.readFileSync('./cert/private.key'),
    certificate = fs.readFileSync('./cert/service.crt'),
    credentials = {key: privateKey, cert: certificate};


let httpProxyServer = http.createServer()
    .on('connection', proxy.httpProxy.core.handleConnection)
    .on('request', proxy.httpProxy.core.handleRequest)
    .on('connect', proxy.httpProxy.core.handleTunnel.bind({
        fakeServerPort: FAKE_HTTPS_PORT
    }))

let displayServer = http.createServer()
    .on('connection', proxy.httpProxy.core.handleConnection)
    .on('request', display.handleRequest)

let displayWS = new WebSocket.Server({ server: displayServer })
displayServer.listen(HTTP_DISPLAY_SERVER_PORT, () => {
    console.log('HTTP Proxy Server is running on: https://localhost:%s', HTTP_DISPLAY_SERVER_PORT);
})
displayWS.on('connection', () => {
    console.log('web tracer connected')
})

// let wss = new WebSocket.Server({ server: fakeHTTPSServer })
let wss = new WebSocket.Server({ noServer: true })
wss.on('connection', proxy.wss.core.handleConnection.bind({
    wss, displayWS
}))

let fakeHTTPSServer = https.createServer(credentials)
    .on('connection', proxy.fakeHTTPSServer.core.handleConnection)
    .on('request', proxy.fakeHTTPSServer.core.handleRequest)
    .on('upgrade', proxy.fakeHTTPSServer.core.handleUpgrade.bind({
        wss
    }))
    .on('connect', proxy.fakeHTTPSServer.core.handleTunnel)

httpProxyServer.listen(HTTP_PROXY_PORT, function() {
    console.log('HTTP Proxy Server is running on: https://localhost:%s', HTTP_PROXY_PORT);
});
fakeHTTPSServer.listen(FAKE_HTTPS_PORT, function() {
    console.log('Fake HTTPS Server is running on: https://localhost:%s', FAKE_HTTPS_PORT);
});

process.on('error', (error) => {
    console.log('Process Error', error)
})