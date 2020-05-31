const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class InvoiceItems extends Model {}

module.exports=(sequelize)=>{InvoiceItems.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        InvoiceId:{
            type: Sequelize.INTEGER
        },
        TrackId:{
            type: Sequelize.INTEGER
        },
        UnitPrice:{
            type: Sequelize.NUMBER
        },
        Quantity:{
            type: Sequelize.INTEGER
        }
    },{sequelize,modelName:"Invoice_items"} )
    return InvoiceItems
}