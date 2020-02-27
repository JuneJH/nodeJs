
# http模块构建项目

1. http  模块,系统自带http模块,通过createServer()开启服务,参数为一个回调函数其参数为request和response.createServer方法再net模块中存在

2. url   模块,解析url地址parse();

3. fs模块,读取文件,分为同步读取和异步读取

## 文件说明

### 根目录index.js

- configGlob模块   全局配置信息
- pathSet          请求动态资源时的接口集合
- log               打印日志
- filterLoader      拦截器

1. 通过http.createServer(callback).listen(port)开启项目
2. callback 通过request.url得到url并解析,创建拦截器,判断是否为静态文件,分别获取相应的资源**在获取资源一定要进行try{}catch(){},避免内部错误导致服务器关闭**
3. 判断是否为静态文件函数,通过配置文件的文件格式匹配

### config.js

解析配置文件service.conf字符串,注意在Linux/window系统的\r\n的差异

### filterLoader.js

合并所有的filter，并导出一个集合

### loader.js

加载所有的动态资源，并导出一个集合功index.js分发**需要判断重复，如果重复抛出错误**

### log.js

提供打印日志接口

## 文件夹

### dao

链接数据库

### service

没有复杂逻辑可省略

### web

处理业务，调用接口

### page

静态资源

### filter
 
过滤器

### log

日志文件



