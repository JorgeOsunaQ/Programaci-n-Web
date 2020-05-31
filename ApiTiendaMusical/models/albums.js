const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Albums extends Model {}

module.exports=(sequelize)=>{Albums.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            type: Sequelize.STRING(160),
        },
        ArtistId:{
            type: Sequelize.INTEGER
        }
    },{sequelize,modelName:"Albums"} )
    return Albums
}