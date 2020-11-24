const log4js = require("log4js");
const path = require("path");

log4js.configure({
    //入口
    appenders:{
        sql: {
            type:"file",filename:path.resolve(__dirname,"logs","sql.log"),
            layout:{
                type:"pattern",
                pattern:"[%p] %c %m %d{yyyy-MM-dd hh:mm:ss}"
            }
        },
        default:{
            type:"file",filename:path.resolve(__dirname,"logs","default.log"),
        }
    },
    // 类别，与入口相对应
    categories:{
        sql:{
            appenders:["sql"],
            level:"all"
        },
        default:{
            appenders:["default"],
            level:"all"
        }
    }
})
//当进程突然终止时，完成写入日志
process.on("EXIT", function(){
    log4js.shutdown();
});

const sql = log4js.getLogger("sql");
exports.sqlLog = sql;