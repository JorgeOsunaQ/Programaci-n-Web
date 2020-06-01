const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Artists extends Model {}

module.exports=(sequelize)=>{Artists.init(
    {
        Id:{
            type: Sequelize.INTEGER(100),
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            type: Sequelize.STRING(120),
        }
    },{sequelize,modelName:"Artists"} )
    return Artists
}