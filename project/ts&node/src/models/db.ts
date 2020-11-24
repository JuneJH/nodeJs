import {
    Sequelize,
    Model,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
} from 'sequelize';


const sequelize = new Sequelize('ormDB', 'root', 'root', {
    host: '121.36.51.141',
    dialect: "mysql"
});
const Admin = sequelize.define("Adimin", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

interface Admin {
    firstName:string,
    lastName:string
}

export async function init (){
    // await Admin.sync();
    // const user= Admin.build({firstName:"J",lastName:"H"})
    // const user2 :any = await Admin.create({firstName:"L",lastName:"ly2"})
    // user2.save();
    // user2.firstName = "M"
    // console.log("Admin对象",JSON.stringify(user,null,4))
    // console.log("重新生成表")
    // console.log(user2.toJSON())
    // await user.save();

    const userList = await Admin.findAll();
    console.log(userList.forEach(user=>console.log(user.toJSON())))
}



