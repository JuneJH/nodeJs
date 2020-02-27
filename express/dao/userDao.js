const dbUtil = require('./dbUtil');

function findAllUser(success) {
    const connection = dbUtil.createConnection();
    connection.connect();
    const sql = 'select * from users'
    connection.query(sql, function (error, result) {
        if(error == null){
            success(result)
        }else{
            throw Error('link database query error')
        }
    })
    connection.end();
}
function findUserByid(id,success){
    const connection = dbUtil.createConnection();
    const sql = 'select password from users where id=?';
    connection.connect();
    console.log(id)
    connection.query(sql,[id],function(error,result){
        if(error == null){
            success(result);
        }else{
            throw Error('查询错误'+ error)
        }
    })
    connection.end();

}
function insertUser(user,success){
    const connection = dbUtil.createConnection();
    connection.connect();
    const sql = 'INSERT INTO users(id,username,PASSWORD) VALUES (?,?,?)';
    connection.query(sql,user,function(error,result){
        if(error == null){
            success(result);
        }else{
            throw Error('插入错误',error)
        }
    })
    connection.end();
}

module.exports = {
    findAllUser,
    insertUser,
    findUserByid
}
