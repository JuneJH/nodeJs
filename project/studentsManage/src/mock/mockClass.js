const Mock = require("mockjs");
const data = Mock.mock({
    "datas|16":[{
        "id|+1":1,
        name:"宏志 @id 班",
        openDate:"@date",
    }]
}).datas;
const Class = require("../models/Class");
Class.bulkCreate(data).then(data=>{
    console.log("添加数据成功",data);
})
