
const jwt = require("jsonwebtoken");
const secrecy = "****";
//  颁发

exports.publish = function (res,maxAge = 3600,info={}){
    const token = jwt.sign(info,secrecy,{
        expiresIn:maxAge
    })
    res.cookie("token",token,{
        sameSite:"lax",
    })
    res.header("authorization",token);
}

exports.verify = function (req){
    let token = req.headers.authorization || (req.headers.cookie && req.headers.cookie.split("=")[1]);
    if(!token){
        return  null;
    }
    token = token.split(" ");
    token = token.length === 1 ? token[0]:token[1];
    try{
        const result = jwt.verify(token,secrecy);
        return  result;
    }catch (e){
        return  null;
    }
}