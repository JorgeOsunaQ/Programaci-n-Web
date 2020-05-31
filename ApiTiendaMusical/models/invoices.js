const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Invoices extends Model {}

module.exports=(sequelize)=>{Invoices.init(
    {
        Id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CustomeId:{
            type: Sequelize.INTEGER
        },
        InvoiceDate:{
            type: Sequelize.DATE
        },
        BillingAddress:{
            type: Sequelize.STRING(200)
        },
        BillingCity:{
            type: Sequelize.STRING(200)
        }
    },{sequelize,modelName:"Invoices"} )
    return Invoices
}