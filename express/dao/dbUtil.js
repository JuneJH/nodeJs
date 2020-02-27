const mysql = require('mysql');

function createConnection(){
    const conneciton = mysql.createConnection({
        url: '127.0.0.1',
        port: '3306',
        usre: 'root',
        password: 'root',
        database: 'node-first'
    })
    return conneciton
}
module.exports.createConnection = createConnection;

