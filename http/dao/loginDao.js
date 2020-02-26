const createConnection = require('./dbutils');

function queryPasswordByUser(userName,success) {
    const connection = createConnection();
    connection.connect();
    const querySql = 'select * from users where username = ?'
    connection.query(querySql,userName, function (error, result) {
        if(error == null){
            success(result);
        }else{
            console.log('error',error)

            
        }
    })
    connection.end()
}

module.exports.queryPasswordByUser = queryPasswordByUser;