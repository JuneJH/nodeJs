console.log('join m1');
var a = 123;
function add (){
    console.log('run add!!!')
    a += 100;
    return a;
}
module.exports.a = a;
module.exports.add = add;