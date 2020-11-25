const express = require("express");
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
            res.cookie("token", value,{
                path:"/",
                domain:"127.0.0.1",
                maxAge:10000,
            })
            res.header("authorization", value);
            res.send(getResult(results))
        }

    }catch (err){
        next(err);
    }
})
router.post("/register",async (req, res, next) => {
    const results = await addAdmin(req.body);
    if(!results){
        res.send(getResult("注册失败"))
    }else{
        res.send(getResult(results))
    }
})
module.exports = router;