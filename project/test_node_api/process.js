const process = require("process");

// console.log(process.kill(1624),'SIGHUP')

// process.on('SIGHUP', () => {
//     console.log('收到 SIGHUP 信号');
//   });

process.env.NODE_ENV = "june_test"
console.log(process.env.NODE_ENV)