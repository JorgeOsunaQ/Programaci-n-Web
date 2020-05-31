const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Playlists extends Model {}

module.exports=(sequelize)=>{Playlists.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            type: Sequelize.STRING(120),
        }
    },{sequelize,modelName:"Playlists"} )
    return Playlists
}