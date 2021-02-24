// const childProcess = require("child_process");
//
// childProcess.exec("dir",(err,out,stdErr)=>{
//     console.log("开启子进程")
// })

const {Worker} = require("worker_threads");
const path = require("path");
const threadPath = path.resolve(__dirname,"./thread.js")
const worker = new Worker(threadPath,{
    workerData:"数据"
})