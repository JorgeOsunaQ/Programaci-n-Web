const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Employees extends Model {}

module.exports=(sequelize)=>{Employees.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FirstName:{
            type: Sequelize.STRING(20)
        },
        LastName:{
            type: Sequelize.STRING(20)
        },
        Title:{
            type: Sequelize.STRING(30)
        },
        Address:{
            type: Sequelize.STRING(70)
        },
        ReporsTo:{
            type:Sequelize.INTEGER
        },
        BirthDate:{
            type: Sequelize.DATE
        },
        HireDate:{
            type: Sequelize.DATE
        }
    },{sequelize,modelName:"Employees"} )
    return Employees
}