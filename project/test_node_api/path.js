const path = require("path");

console.log("返回平台路径界定符",path.delimiter);
console.log("返回path路劲扩展名字",path.extname("/2/3/index.js"));
console.log("规范化生成路径",path.join("1","2",'3'));
console.log("将路径或路径片段的序列解析为绝对路径",path.resolve(__dirname,"../"));
console.log("提供平台指定的路径片段分隔符",path.sep)
