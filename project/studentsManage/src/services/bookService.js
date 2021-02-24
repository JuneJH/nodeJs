const Book = require('../models/Book');
const {DataTypes} = require('sequelize');

exports.addBook = async function (obj){
    return  Book.create(obj);
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

exports.getBook = async function(page,pageSize){
    const result = await Book.findAndCountAll({
        offset:(page - 1) * pageSize,
        limit:+pageSize
    })
    return {
        total:result.count,
        data:JSON.parse(JSON.stringify(result.rows))
    };
}