const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Tracks extends Model {}

module.exports=(sequelize)=>{Tracks.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name:{
            type: Sequelize.STRING(200)
        },
        AlbumId:{
            type: Sequelize.INTEGER,
        },
        MediaTypeId:{
            type: Sequelize.INTEGER
        },
        GenreId:{
            type: Sequelize.INTEGER
        },
        Composer:{
            type: Sequelize.STRING(200)
        },
        Miliseconds:{
            type: Sequelize.INTEGER
        },
        Bytes:{
            type: Sequelize.INTEGER
        },
        UnitPrice:{
            type: Sequelize.NUMBER
        }
    },{sequelize,modelName:"Tracks"} )
    return Tracks
}