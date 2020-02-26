const url = require('url')
const configGlob = require('../config');  // 引入全局配置文件

function loginFilter(request, response) {
    // 解析url，这是一个对象
    const requestUrl = url.parse(request.url)
    // 得到相应的属性
    const urlName = requestUrl.pathname;
    if (urlName == '/login.html' || urlName == '/isLogin' || isStaticRequest(urlName)) {
        console.log(urlName, '通过')
        return true;
    }
    const cookies = request.headers.cookie;
    const cookieObj = {};
    if (cookies) {
        const temp = cookies.split(';');
        for (let i = 0; i < temp.length; i++) {
            cookieObj[temp[i].split('=')[0].trim()] = temp[i].split('=')[1]
        }
    }
    console.log(cookieObj)
    if (cookieObj.IsLogin) {
        console.log(urlName, '通过')

        return true;
    } else {
        
        console.log(urlName, '拦截')

        response.writeHead(302,{'location':'login.html'})
        response.end();

        return false;
    }



}
function isStaticRequest(urlName) {
    const staticType = configGlob.static_file_type;
    for (let i = 0; i < staticType.length; i++) {
        if (staticType[i] == '.html') {
            continue;
        }
        if (urlName.indexOf(staticType[i]) == urlName.length - staticType[i].length) {
            return true;
        }
    }
    return false;
}

module.exports = loginFilter