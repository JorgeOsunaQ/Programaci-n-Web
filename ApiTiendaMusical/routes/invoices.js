const router = require("express").Router();

module.exports = (models) => {

    router.post('/',async (req, res)=>{
        try{
            const invoice=req.body;

            const customer=await models.customersModel.findByPk(invoice.CustomerId).then({
                where:{
                    CustomerId:invoice.CustomerId
                }
            });

            if(customer==null)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "No existe ninguna referencia del cliente en la base de datos.",
                })

            
            await models.invoicesModel.create(invoice);
            res.send({
                message: "Factura Agregada Exitosamente.",
            })

        }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Datos de la factura invalidos.",
                error: error})
        }
       })

    return router;
}