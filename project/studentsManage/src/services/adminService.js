const Admin = require("../models/Admin");
const md5 = require("md5");

exports.addAdmin = async function(adminObj){
    adminObj.loginPassword = md5(adminObj.loginPassword);
    const instance = await Admin.create(adminObj);
    return instance;
}
exports.deleteAdmin = async function(id){
    return Admin.destroy({
        where: {
            id:id,
        }
    })
}
exports.updateAdmin = async function(id,adminObj){
    return Admin.update(adminObj,{
        where:{
            id:id,
        }
    })
}
exports.login = async function(loginId,loginPassword){
    loginPassword = md5(loginPassword);
    let result = await Admin.findOne({
        where:{
            loginId,loginPassword,
        }
    })
    if(result){
        result = result.toJSON();
      // delete result.loginPassword;
      return  result;
    }
    return  null;
}
exports.getAdminById = async function(id){
    return await Admin.findOne({
        where:{
            id,
        }
    }).then(data=>{
        if(data){
            data = data.toJSON();
            delete data.loginPassword;
        }
        return data;
    })
}

