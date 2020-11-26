const {getErr} = require("../../utils/getResponse");
const {decrypt} = require("../../utils/crypt");
const {pathToRegexp} = require("path-to-regexp");//把字符串装成正则对象

const needTokenApi = [
    // {
    //     url:"/student",
    //     method:"GET",
    // },
    {
        url:"/student",
        method:"POST",
    },   {
        url:"/student",
        method:"PATCH",
    }
]
module.exports = (req,res,next)=>{
    const isNeedToken = needTokenApi.filter((api=>{
        const reg = pathToRegexp(api.url);
        return api.method === req.method && reg.test(req.path);
    }))
    if(isNeedToken.length === 0){
        next();
        return;
    }
    let token = req.cookies.token;
    token || (token = req.headers.authorization);
    if(!token){
        // 没有权限
        noTokenHandler(req,res,next);
        return ;
    }
    token && (token=decrypt(token))
    req.userId = token;
    next();

}

function noTokenHandler(req,res,next){
    res.status(403).send(getErr("没有权限",403))
}