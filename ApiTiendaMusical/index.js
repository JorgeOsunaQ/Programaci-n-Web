const express=require("express");
const bodyParse=require("body-parser");

//Configuración básica del servidor
const app=express();
const port= process.env.port || 3000;

//Obtenemos los modelos de la bd 
const models=require('./config-db')

//Establecer rutas de la API


app.listen(port,()=>{
    console.log("Aplicación corriendo en el puerto "+port)
})

app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());

app.get('/',(req,res)=>{
    console.log(req.headers)
    res.send('SSSSSSSS')
})