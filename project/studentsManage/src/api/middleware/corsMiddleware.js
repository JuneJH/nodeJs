const allowOrigins = ["http://localhost:63342","http://localhost:3000","http://localhost:9527","http://localhost:12306",]
module.exports = (req,res,next)=>{
    if(req.method === "OPTIONS"){
        res.setHeader("Access-control-allow-method",req.headers["access-control-request-method"]);
        res.setHeader("Access-Control-allow-headers",req.headers["access-control-request-headers"]);
        res.setHeader("Access-Control-Max-Age",1000)
    }
    res.header("Access-Control-Allow-Credentials",true);
    res.header("my-header","this is come from service!!!")
    res.header("my-header1","this is come from service!!!")
    res.header("Access-Control-Expose-Headers","my-header,my-header1");
    if("origin" in req.headers && allowOrigins.includes(req.headers.origin)){
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }
    next();
}