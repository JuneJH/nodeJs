const mysql = require('mysql')


function createConnection (){
    const connection = mysql.createConnection({
        url:'127.0.0.1',
        port:'3306',
        database:'node-first',
        user:'root',
        password:'root'
    })
    return connection
}

module.exports = createConnection;