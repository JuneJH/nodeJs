const net = require('net');
const service = net.createServer()
service.listen('12306','127.0.0.1');
service.on('listening',function(){
    console.log('服务已开启')
})
service.on('connection',function(socket){
    console.log('服务已连接')
    socket.on('data',function(data){
        console.log(data.toString());
        socket.write('HTTP 200OK\r\nContent-type:text/html\r\n\r\n<html><body>hello</body></html')
    })
})
