const http = require("http");
const express = require("express");
const websocket = require("websocket");

const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const path = require("path")
app.use(express.static(path.resolve(__dirname,"./public")))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('已连接一个用户');
    socket.on("client",(msg)=>{
        console.log(msg);
    })
    let i = 0;
    const timer = setInterval(()=>{
        socket.emit("service","服务端消息"+(i++))
    },2000)
    socket.on("disconnect",()=>{
        clearInterval(timer)
        console.log("断开连接")
    })
});

server.listen(9527, () => {
    console.log('listening on *:9527');
});