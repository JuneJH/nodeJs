const sequelize = require('./db');
const {DataTypes} = require("sequelize");

module.exports = sequelize.define("Book",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    imgUrl:{
        type:DataTypes.STRING,
    },
    publishDate:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    paranoid:true,
})