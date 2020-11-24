require("./Students")
require("./Class")
require("./Book")
require("./Admin")
const sequelize = require("./db");

(async function (){
    const result = await sequelize.sync();
    console.log(result,"同步完成");
})()