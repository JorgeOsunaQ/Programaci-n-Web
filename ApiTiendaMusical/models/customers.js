const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Customers extends Model {}

module.exports=(sequelize)=>{Customers.init(
    {
        Id:{
            type: Sequelize.INTEGER(1000),
            primaryKey: true,
            autoIncrement: true
        },
        FirstName:{
            type: Sequelize.STRING(40)
        },
        LastName:{
            type: Sequelize.STRING(20)
        },
        Company:{
            type: Sequelize.STRING(80)
        },
        Address:{
            type: Sequelize.STRING(70)
        },
        City:{
            type: Sequelize.STRING(40)
        },
        State:{
            type: Sequelize.STRING(40)
        },
        Country:{
            type: Sequelize.STRING(40)
        },
        PostalCode:{
            type: Sequelize.STRING(10)
        },
        Phone:{
            type: Sequelize.STRING(24),
            allowNull: false
        },
        Fax:{
            type: Sequelize.STRING(24),
            allowNull: true
        },
        Email:{
            type: Sequelize.STRING(60)
        },
        SupportRepId:{
            type: Sequelize.INTEGER
        }
    },{sequelize,modelName:"Customers"} )
    return Customers
}