const express = require("express");
const {getAdminById} = require("../services/adminService");
const {publish} = require("./tool/jwt");
const {encrypt} = require("../utils/crypt");
const router = express.Router();
const {login,addAdmin} = require("../services/adminService");
const {getResult} = require("../utils/getResponse");

router.post("/login",async (req, res, next) => {
    try{
        const results = await login(req.body.loginId,req.body.loginPassword);
        if(!results){
            res.send(getResult("登录失败"))
        }else{
            const value = encrypt(""+results.id);
            // res.cookie("token", value,{
            //     path:"/",
            //     domain:"127.0.0.1",
            //     maxAge:24*60*60*1000,
            // })
            // res.header("set-cookie","my=234")
            // req.session.loginUser = results;
            // res.header("authorization", value);d
            publish(res,3600*24,{
                user:results
            })
            res.send(getResult(results))
        }
    }catch (err){
        next(err);
    }
})
router.post("/register",async (req, res, next) => {
    console.log("添加一个用户",req.body)
    const results = await addAdmin(req.body);
    if(!results){
        res.send(getResult("注册失败"))
    }else{
        res.send(getResult(results))
    }
})
router.get("/logout",(req,res)=>{
    res.cookie("token","",{
        maxAge:-1,
    })
    res.send(getResult("退出成功"))
})

router.get("/whoIam",(async (req, res) => {
  try{
      const result = await getAdminById(req.user.user.id);
      console.log("resu",result)
      res.send(result);
  }catch (e){
      res.send(getResult("暂无信息"));
  }

}))
module.exports = router;