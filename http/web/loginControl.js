const path = new Map();

function isLogin(request,response){
    response.writeHead(200);
    response.write('<html><body><h1>this is login page!!</h1></body></html>')
    response.end();

}
path.set('/isLogin',isLogin);


module.exports = path;