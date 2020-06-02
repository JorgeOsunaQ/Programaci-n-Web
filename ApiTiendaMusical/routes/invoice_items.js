const router = require("express").Router();

module.exports = (models) => {

    router.post('/',async (req, res)=>{
        try{
            const invoice_item=req.body;

            const invoice=await models.invoicesModel.findByPk(invoice_item.InvoiceId);
            const track=await models.trackModel.findByPk(invoice_item.TrackId);

            if(invoice==null || track==null)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "No existe ninguna referencia del track o de la factura en la base de datos.",
                })
            
            await models.invoice_itemsModel.create(invoice_item);
            res.send({
                message: "Item Agregado Exitosamente a la Factura.",
            })

        }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Datos de la consulta invalidos.",
                error: error})
        }
    })

    return router;
}