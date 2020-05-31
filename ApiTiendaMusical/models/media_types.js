const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class MediaTypes extends Model {}

module.exports=(sequelize)=>{MediaTypes.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            type: Sequelize.STRING(120)
        }
    },{sequelize,modelName:"Media_types"} )
    return MediaTypes
}