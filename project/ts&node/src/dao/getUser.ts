import createMysqlConnection from "./createMysql";


export default function queryAllUser(callback:Function){
    const sql = "SELECT *,case sex when 0 then '女' else '男' end as sex FROM user";
    const connection = createMysqlConnection();
    connection.connect();
    connection.query(sql,(error,result)=>{
        if(!error){
            callback(result)
        }else{
            console.log(error)
        }
    })
    connection.end();

}