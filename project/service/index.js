const http = require('http');
const fs = require("fs");
const url = require('url');
const path = require('path')
const process = require('process')
console.log(process.env.NODE_ENV)
const service = http.createServer((req,res)=>{
    dealRequest(req,res);
    
    
    
})
service.on("connection",()=>{
    console.log("有链接来了")
})
service.on('listening',()=>{
    console.log("监听中")
})
service.on("close",()=>{
    console.log("关闭服务")
})
service.listen(9522)

async function dealRequest(req,res){
    const reqUrl = url.parse(req.url);
    let reqPath = path.join(__dirname,reqUrl.path);
    console.log(reqPath)
    if(reqPath.includes(".")){
        res.end();
        return;
    }else {
        reqPath += ".html"
    }
    const content =await fs.promises.readFile(reqPath,{
        encoding:'utf-8'
    })
    res.write(content);
    res.end()  
}