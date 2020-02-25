const http = require('http');   
const url = require('url')
const fs = require('fs');
const configGlob = require('./config');  // 引入全局配置文件
const pathSet = require('./loader');     // 引入加载文件
const log = require('./log')             // 打日志


// 创建一个链接，底层调用net层的该方法，即tcp
http.createServer(function (request, response) {
    // 解析url，这是一个对象
    const requestUrl = url.parse(request.url)
    // 得到相应的属性
    const urlName = requestUrl.pathname;
    const params = requestUrl.query;
    //判断是否请求为静态资源
    const isStatic = isStaticRequest(urlName);
    //请求静态资源
    if (isStatic) {
        //单线程，不能因为请求错误关掉服务器
        try {
            // 得到需要的资源，通过url地址匹配相应的资源
            const responseFile = fs.readFileSync(configGlob.page_path + urlName);
            response.writeHead(200);
            response.write(responseFile);
            response.end();
        } catch (e) {
            log('请求静态资源不存在 ' + urlName)
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    } else {
        console.log(pathSet.get(urlName))
        if (pathSet.get(urlName)) {
            try {
                pathSet.get(urlName)(request, response);
            } catch (e) {
                log('服务器错误 ' + urlName)
                response.writeHead(500);
                response.write('<html><body><h1>500 Badserver</h1></body></html>')
                response.end();
            }
        } else {
            log('请求静态资源不存在 ' + urlName)
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }

    }

}).listen(12306)

function isStaticRequest(urlName) {
    const staticType = configGlob.static_file_type;
    for (let i = 0; i < staticType.length; i++) {
        if (urlName.indexOf(staticType[i]) == urlName.length - staticType[i].length) {
            return true;
        }
    }
    return false;
}