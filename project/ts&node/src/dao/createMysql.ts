import * as mysql from 'mysql';

export default function createMysqlConnection(){
    return  mysql.createConnection({
        host:"121.36.51.141",
        port:3306,
        user:"root",
        password:"root",
        database:"test"
    })
}