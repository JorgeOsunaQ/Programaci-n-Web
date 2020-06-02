const router = require("express").Router();

module.exports = (models) => {

    router.get('/',async (req,res)=>{

        const empleadosQuery= await models.employeesModel.findAll().then({
            attributes: ['Id','FirstName', 'LastName','Address','ReporsTo','BirthDate','HireDate']
        }).catch(error=>{
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Imposible Obtener Datos de la BD.",
                error: error})
        })

        res.send(empleadosQuery);
    })

    router.post('/',async (req,res)=>{
        employee=req.body;

        if(!employee.FirstName || !employee.LastName || !employee.Title || !employee.Address || !employee.HireDate)
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Los datos del empleado están incompletos.",
            })

        if(employee.ReporsTo){
            const reporsTo=await models.employeesModel.findByPk(employee.ReporsTo);
            if(reporsTo==null)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "No existe ninguna referencia del jefe del empleado.",
                })
        }

        try{
            await models.employeesModel.create(employee);
            res.send({
                message: "Empleado Agregado Exitosamente.",
            })
        }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Datos del empleado invalidos.",
                error: error})
        }
       })

       router.put('/:id',async (req,res)=>{
        try{
            const id=req.params.id;
            const employeeData=req.body;

            const newData={
                FirstName: employeeData.FirstName,
                LastName: employeeData.LastName,
                Title: employeeData.Title,
                ReporsTo:employeeData.body
            }
            
            const employee=await models.employeesModel.findByPk(id);
            if(employee==null)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "El ID que envío no coincide con ningúna empleado registrado.",
                    })
            

            await models.employeesModel.update(
                newData,
                { where: { Id: id }}
            )

            await res.send({
                message: "Datos del empleado modificados exitosamente."
            })
    
            }catch(error){
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "No fue posible modificar los datos del empleado.",
                    error: error})
            }
       })

       router.get('/:id',async (req, res)=>{
           try{
           const employeeId=req.params.id;

            const employee=await models.employeesModel.findByPk(employeeId);
            if(employee==null)
                return res.status(400).json({
                    flag: false,
                    data: null,
                    message: "El ID que envío no coincide con ningúna empleado registrado.",
                    })

            console.log(employeeId)
            
            const empleadosQuery= await models.employeesModel.findAll({
                where:{
                    ReporsTo: employeeId,
                },
                attributes: ['Id','FirstName', 'LastName','Address','ReporsTo','BirthDate','HireDate']
            })

            res.send(empleadosQuery);
           }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Imposible Obtener Datos de la BD.",
                error: error})
           }
       })

    return router;
}