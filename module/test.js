var a = require('./m1.js')
console.log(a.add())
console.log(a)
a.add = function(){
    return 'a updata!!!'
}
var b = require('./m1.js')
console.log(b.add())
console.log(b)