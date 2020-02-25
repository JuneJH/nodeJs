const net = require('net');
const socket = net.connect('12306','127.0.0.1')
socket.on('connect',function(){
    console.log('已连接')
})
