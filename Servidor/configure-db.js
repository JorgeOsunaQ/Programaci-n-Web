const Sequelize= require("sequelize")

const sequelize=new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

sequelize.authenticate()
.then(()=>{
    console.log("conexión a la base de datos")
})
.error((error)=>{
    console.log(error)
})

const usuarioModel=require('./models/users_model')(sequelize);

sequelize.sync();

module.exports={
    usuarioModel
};