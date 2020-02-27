//解析配置文件，供全局使用
const fs = require('fs');
let config = fs.readFileSync('./service.conf');
let configArr = config.toString().split('\n');
const configGlob = {};
for(let i = 0; i < configArr.length; i ++){
    const temp = configArr[i].trim().split('=');
    configGlob[temp[0]] = temp[1];
}
if(configGlob.static_file_type){
    configGlob.static_file_type = configGlob.static_file_type.split('|');
}else{
    throw Error('static_file_type配置错误，来自配置文件')
}
console.log(configGlob)
module.exports = configGlob;
