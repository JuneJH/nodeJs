const loginService = require('../services/loginService')
const url = require('url');

//存放路径映射，并且导出
const path = new Map();

function isLogin(request,response){
    request.on('data',function(params){
        const userName = params.toString().split('&')[0].split('=')[1];
        const password = params.toString().split('&')[1].split('=')[1];
        loginService.queryPasswordByUser(userName,function(result){
            if(result == null || result.length == 0){
                response.writeHead(200);
                response.write('no user')
                response.end();
            }else{
                if(password == result[0].password){
                    // ajax 请求，自己跳转
                    // response.writeHead(200,{'Set-Cookie':'password=12345'});
                    // response.write('ok')
                    // response.end();

                    //form 表达请求，后端跳转
                    response.writeHead(302,{'location':'/main.html','Set-Cookie':'IsLogin=true'})
                    response.end();

                }else{
                    response.writeHead(200);
                    response.write('password is errorr')
                    response.end();
                }
            }
           
        })

    })
  
   

}
path.set('/isLogin',isLogin);


module.exports = path;