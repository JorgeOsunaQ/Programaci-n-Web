const router= require("express").Router();
const bcrypt= require("bcrypt")
const config= require("../conf")

module.exports= (models)=>{

    router.get("/",async (req,res)=>{
        const usuarios= await models.usuarioModel.findAll({
            attributes: ["username", "name", "lastname", "age"]
        });

        res.send(usuarios)
    });
    
    router.get("/:id", async(req, res)=> {
        const idUser = req.params.id;
        const usuario = await models.usuarioModel.findOne({
            attributes: ["username", "name", "lastname", "age"],
            where: { id: idUser}
        });
        res.send(usuario)
    });

        /*usuarios = usuarios.map(usuario=>{
            return {
                username:usuario.username,
                name: usuario.name,
                age: usuario.age
            }
        })*/

    return router;
};

