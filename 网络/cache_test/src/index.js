const express = require("express");
const path = require("path");
const app = express();

let count = 1;
app.use("",express.static(path.join(__dirname,"./public"),{
    lastModified:false,
    etag:false,
}))

app.use("/getCache",(req,res)=>{
    res.send({
        data:count
    })
    // count ++;
})


app.listen(80,()=>{
    console.log("server start!!")
})