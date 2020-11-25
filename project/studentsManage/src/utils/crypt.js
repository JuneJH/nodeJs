// 使用对称加密算法 aes 128
// 128密钥
//Math.random().toString(16).slice(6, -1) + Math.random().toString(16).slice(6, -1)
const secret = Buffer.from("5b29b4fb5a6ecd8f");
const crypto = require("crypto");

const iv = Buffer.from("0b1cf237a87f2d9f");

exports.encrypt = function(str){
    const cry = crypto.createCipheriv("aes-128-cbc", secret,iv);
    let result =cry.update(str,"utf-8","hex");
    result += cry.final("hex")
    return result;
}

exports.decrypt = function(str){
    const decry = crypto.createDecipheriv("aes-128-cbc",secret,iv);
    let result = decry.update(str,"hex","utf-8");
    result += decry.final("utf-8");
    return result;
}

