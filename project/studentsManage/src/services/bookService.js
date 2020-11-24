const Book = require('../models/Book');
const {DataTypes} = require('sequelize');

exports.addBook = async function (obj){
    return await Book.create(obj).toJSON();
}
exports.deleteBook = async function (id){
    return await Book.destroy({
        where: {id: id}
    })
}

exports.updateBook = async function (id,obj){
    Book.update(obj,{
        where:{
            id:id,
        }
    })
}