const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 2000 });

server.on('connection', ws => {
    ws.send('As-Salymu Alyikum')
});


