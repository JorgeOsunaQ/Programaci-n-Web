const router = require("express").Router();

module.exports = (models) => {

    router.get('/',async (req, res)=>{
        const employeeId=req.query.employee;

        const empleado=await models.employeesModel.findByPk(employeeId);
        if(empleado==null)
            return res.status(400).json({
                flag: false,
                data: null,
                message: "No existe ninguna referencia del empleado en la base de datos.",
            })

        const clientesQuery= await models.customersModel.findAll().then({

            where:{
                SupportRepId: employeeId
            }
        }).catch(error=>{
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Imposible Obtener Datos de la BD.",
                error: error})
        })
    
        res.send(clientesQuery);
    });

    router.post('/',async (req, res)=>{
        try{
            customerBody=req.body;

            if(!customerBody.FirstName || !customerBody.LastName || !customerBody.Address || !customerBody.City || !customerBody.Country 
                || !customerBody.PostalCode || !customerBody.Email || !customerBody.SupportRepId)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "Los datos del cliente están incompletos.",
                })

            if(customerBody.SupportRepId){
                const vendedor=await models.employeesModel.findByPk(customerBody.SupportRepId);
                console.log(customerBody.SupportRepId)
                if(vendedor==null)
                    return res.status(400).json({
                        flag: false,
                        data: null,
                        message: "No existe ninguna referencia del vendedor que atiende al cliente.",
                    })
                }


                await models.customersModel.create(customerBody);
                res.send({
                    message: "Cliente Agregado Exitosamente.",
                })

        }catch(error){
                console.log(error)
                return res.status(400).json({
                flag: false,
                data: null,
                message: "No ha sido posible agregar al cliente.",
                })
        }
    });

    return router;
}