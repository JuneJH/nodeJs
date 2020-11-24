const {Sequelize} = require("sequelize");
const {sqlLog}= require("../logger");

const sequelize = new Sequelize("studentsDb","root","root",{
    host:"121.36.51.141",
    dialect:"mysql",
    logging:(logs,a)=>{
        sqlLog.debug(logs)
        console.log(a);
    }
})

module.exports = sequelize;
