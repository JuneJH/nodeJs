const loginDao = require('../dao/loginDao');

function queryPasswordByUser (userName,success){
    loginDao.queryPasswordByUser(userName,success)
}

module.exports.queryPasswordByUser = queryPasswordByUser;