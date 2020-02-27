const express = require('express');
const configGlobal = require('./config');
const loader = require('./loader');
const cookie = require('cookie-parser')

// console.log(express)
// 创建一个
const app = new express();
// 配置静态资源路径
app.use(express.static(configGlobal['page_path']))
app.use(cookie())
app.get('/api/*',function(request,response,next){
    if(request.cookies.id){
        next();
    }else{
        response.redirect('/login.html')
    }
})

app.listen(configGlobal['port'])
loader.init(app);
