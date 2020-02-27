const userDao = require('../dao/userDao');
const url = require('url');

const pathSet = new Map();

function findAllUser(request,response){
    userDao.findAllUser(function(result){
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        response.write(JSON.stringify(result))
        response.end();
    })
}
function insertUser(request,response){
    const params = url.parse(request.url,true).query;
    const userInfo = [];
    for (const key in params) {
            userInfo.push(params[key]);
    }
    userDao.insertUser(userInfo,function(result){
        response.writeHead(200);
        response.write('ok')
        response.end();

    })
}
function login(request,response){
    const params = url.parse(request.url,true).query;
    userDao.findUserByid(params.id,function(result){
        if(result && result.length != 0 && result[0].password == params.password){
            response.cookie('id',params.id);
            response.redirect('/api/findAllUser');
        }else{
            response.redirect('/loginError.html')
        }

    })
}

pathSet.set('/api/findAllUser',findAllUser);
pathSet.set('/api/insertUser',insertUser);
pathSet.set('/login',login)

module.exports = pathSet;