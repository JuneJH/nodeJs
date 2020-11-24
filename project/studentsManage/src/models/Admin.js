const sequelize = require("./db");
const {DataTypes} = require("sequelize");

const Admin = sequelize.define("Admin", {
    loginId:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    loginPassword:{
        type:DataTypes.STRING,
        allowNull: false,
    },
},{
    createdAt:false,
    updatedAt:false,
    paranoid:true,// 逻辑删除
})

module.exports = Admin;
