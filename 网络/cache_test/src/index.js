const express = require("express");
const path = require("path");
const app = express();

app.use("",express.static(path.join(__dirname,"./public"),{
    lastModified:false,
    etag:false,
    maxAge:10000,
}))

let count = 1;
app.get("/getCache",(req,res)=>{
    console.log("收到请求")
    res.setHeader("expires",new Date(+new Date() + 30000))
    res.send({
        data:count
    })
    count ++;
})
app.post("/postCache",(req,res)=>{
    console.log("收到请求")
    res.setHeader("expires",new Date(+new Date() + 30000))
    res.send({
        data:count
    })
    count ++;
})


app.listen(80,()=>{
    console.log("server start!!")
})