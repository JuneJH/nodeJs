var $ = {
    ajax: function (options) {
      //如果options参数没有传递，直接返回。
      if (!options || typeof options !== "object") {
        return;
      }
      
      //处理默认参数
      //如果参数不是post，那就默认为get
      var type = options.type == "post" ? "post" : "get";
      //如果没有传url，那就传当前地址
      var url = options.url || location.pathname;
      //如果参数不是false，那就默认是true，发异步请求
      var async = options.async == false ? false : true;
      
      var params = this.getParams(options.params);
      
      var xhr = new XMLHttpRequest();
      
      //设置请求行
      if (type == "get") {
        url = url + "?" + params;
        console.log(url)
      }
      xhr.open(type, url, async);
      
      //设置请求头
      if (type == "post") {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      }
      //设置请求参数
      xhr.send(params);
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            /*根据响应头的content-type属性指定方法接收到的内容*/
            var contentType = xhr.getResponseHeader('content-type');
            var data = null;
            if (contentType.indexOf('json') > -1) {
              data = JSON.parse(xhr.responseText);
            } else if (contentType.indexOf('xml') > -1) {
              data = xhr.responseXML;
            } else {
              data = xhr.responseText;
            }
            /*执行成功函数*/
            options.success && options.success(data);
          } else {
            options.error && options.error(xhr.responseText);
          }
          
        }
      }
    },
    getParams: function (obj) {
      //将obj对象转换成参数
      //将对象转换成参数列表
      if (!obj) {
        return null;
      }
      var arr = [];
      for (var k in obj) {
        arr.push(k + "=" + obj[k]);
      }
      return arr.join("&");
    }
    
  }


