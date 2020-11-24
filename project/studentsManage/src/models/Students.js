const sequelize = require("../models/db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define("Student", {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    birthdate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    sex:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    mobile:{
        type:DataTypes.STRING(11),
        allowNull:false,
    }
},{
    createdAt:false,
    updatedAt:false,
    paranoid:true,
})