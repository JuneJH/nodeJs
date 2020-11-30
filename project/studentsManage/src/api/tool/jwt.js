
const jwt = require("jsonwebtoken");
const secrecy = "****";
//  颁发

exports.publish = function (res,maxAge = 3600,info={}){
    console.log('run jwt')
    const token = jwt.sign(info,secrecy,{
        expiresIn:maxAge
    })
    res.header("authorization",token);
}

exports.verify = function (req){
    let token = req.headers.authorization;
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