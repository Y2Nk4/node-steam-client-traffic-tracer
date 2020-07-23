let WebSocket = require('ws'),
    HttpsProxyAgent = require('https-proxy-agent')

let agent = new HttpsProxyAgent('http://127.0.0.1:10068')

const ws = new WebSocket('wss://cm5-ord1.cm.steampowered.com:27037/cmsocket/', {});

ws.on('open', function open() {
    console.log('connected');
});

ws.on('close', function close() {
    console.log('disconnected');
});

ws.on('message', function incoming(data) {
    console.log('receiving msg', data)
});