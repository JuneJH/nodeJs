const Student= require("../models/Students");
const Class = require("../models/Class");

exports.addStudent = async function(stu){
    const result = await Student.create(stu);
    return result.toJSON();
}
exports.deleteStudent =async function(id){
    return await Student.destroy({
        where :{
            id:id,
        }
    })
}
exports.updateStudent = async function(id,obj){
    return Student.update(obj,{
        where:{
            id:id,
        }
    })
}

exports.getStudent = async function(page,pageSize){
    const result = await Student.findAndCountAll({
        attributes:["id","name","sex","birthdate"],
        include:[Class],
        offset:(page - 1) * pageSize,
        limit:+pageSize
    })
    return {
        total:result.count,
        data:JSON.parse(JSON.stringify(result.rows))
    };
}