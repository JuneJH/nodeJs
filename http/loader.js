// 合并所有的动态请求资源
const fs = require('fs');
const configGlob = require('./config');
const pathSet = new Map();

const files = fs.readdirSync(configGlob.web_path);

for(let i = 0; i < files.length; i ++){
    const temp = require('./' + configGlob.web_path +'/'+ files[i]);
    for (const [k,v] of temp) {
        if(!pathSet.get(k)){
            pathSet.set(k,v);
        }else{
            throw Error('url重复' + key);
        }
    }
}
module.exports = pathSet;