var mysql= require('mysql');
console.log("开始数据")
var connection = mysql.createConnection({
  host     : '121.36.51.141',
  user     : 'root',
  password : 'root',
  database : 'chat'
});
 
connection.connect();
 
connection.query('SELECT * from user', function (error, results) {
  if (error) throw error;
  console.table(results)
});
 
connection.end();
console.log("结束")