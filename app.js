const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://185.43.5.35:2000');
ws.onopen = () => {
    console.log('ONLINE')
};

ws.onclose = () => {
    console.log('DICONNECTED')
};

ws.onmessage = response => {
    console.log(response.data)
};
