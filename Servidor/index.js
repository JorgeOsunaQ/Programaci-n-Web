require('dotenv').config()
const express=require("express");
const app= express();

const bodyParse=require('body-parser')
const modelos= require('./configure-db');
const usuariosAPI= require("./routes/users")(modelos);
const authenticationApi=require('./routes/authentication')(modelos);

const port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}` )
})

//app.set('views','./views');
//app.set('view engine','pug');

app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());

app.use("/api/usuarios",usuariosAPI)
app.use("/api/authentication", authenticationApi);

app.all("/",(req,res)=>{
    res.render('index')
})