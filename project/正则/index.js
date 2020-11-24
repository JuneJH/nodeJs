//长度为8~16字符

// 包含大小写字母，数字和特殊字符中任意三项

// 不包含顺序或倒序账号信息

// 不能为连续或相同数字，字母，键盘3个以上的排序

// 不能为常见密码


const password = "123456789..qq";

// 测试是否包含账号顺序倒序账号信息

/**
 * 
 * @param {*需要匹配的规则} account 
 * @param {*重复次数} len 
 * @param {*被检查的字符串} target 
 */
function checkAccount(account,len,target,reverseFlag){
    if(!Array.isArray(account)){
        account = account.split("");
    }
    if(reverseFlag){
        account = account.reverse();
    }
    let right = "";
    let left = "";
    account.reduce((pre,curr)=>{
        right += `${pre}(?=${curr})|`;
        left += `(?<=${pre})${curr}|`;
        return curr;
    })
    const regStr = `(${right.slice(0,-1)})(${left.slice(0,-1)}){${len}}`
    console.log(regStr)
    const reg = new RegExp(regStr);
    return reg.exec(target);
}

// 测试连续，相同的数字
const reg = /(\d)\1{2}/
const r = /(0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9))((?<=0)1|(?<=1)2|(?<=2)3|(?<=3)4|(?<=4)5|(?<=5)6|(?<=6)7|(?<=7)8|(?<=8)9){2}/


const arr = [0,1,2,3,4,5,6,7,8,9];
const letter = "abcdefg";

// console.log("字母验证",checkAccount(letter,2,"abc"))

// console.log("动态生成",checkAccount(arr,2,password))

// console.log("静止写入",r.exec(password))

