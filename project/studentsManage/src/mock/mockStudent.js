const Mock = require("mockjs");
const data = Mock.mock({
    "students|500-1000":[{
        'name':"@cname",
        "birthdate":"@date",
        "sex|1-2":true,
        mobile:/1[3-9]{10}/,
        "ClassId|1-16":0
    }]
}).students
const Student = require("../models/Students");
Student.bulkCreate(data).then(data=>{
    console.log("导入数据完成")
})

