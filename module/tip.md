# 模块化

**NodeJs都是运行在函数中的**

## exports,require,Module,__filename,__dirname 来自哪儿

这些都来自一个函数的参数，他们的顺序就是以上。
可理解为
```javascript

function (exports,require,module,__filename,__dirname){
    
    // nodeJs代码
}

```


## module.exports 与 exports 的区别

简单理解
```javascript
function (moudle){
    moudle.exports = {};
    exports = moudle.exports;     // exports可以理解未就是moudle.exports的引用，在shoope的笔试中遇到
    return moudle.exports;       // 最后返回的是moudle.exports
}
```