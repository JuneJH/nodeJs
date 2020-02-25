const fs = require('fs');
const confiGlob = require('./config')
const fileName = confiGlob.log_path  + confiGlob.log_name;
function log(data){
    //异步打印日志文件
    fs.writeFile(fileName,data+'\n',{flag:'a'},function(){})

}

module.exports = log;