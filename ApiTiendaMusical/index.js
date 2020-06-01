const express=require("express");
const bodyParse=require("body-parser");

//Configuración básica del servidor
const app=express();
const port= process.env.port || 3000;

//Establecemos configuración de los response y requests de las peticiones
app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());

//Obtenemos los modelos de la bd 
const models=require('./config-db')

//Establecer rutas de la API


app.listen(port,()=>{
    console.log("Aplicación corriendo en el puerto "+port)
})
