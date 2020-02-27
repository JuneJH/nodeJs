const fs = require('fs');

const configGlobal = {};

const configArr = fs.readFileSync('./service.conf').toString().split('\n');
for(let i = 0; i < configArr.length; i ++){
    const temp = configArr[i].trim().split('=');
    configGlobal[temp[0]] = temp[1];
}
module.exports = configGlobal;