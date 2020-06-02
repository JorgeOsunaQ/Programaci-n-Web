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

//Obtener las rutas del servidor
const employees=require('./routes/employees')(models);
const customers=require('./routes/customers')(models);
const invoices=require('./routes/invoices')(models);
const tracks=require('./routes/tracks')(models);
const albums=require('./routes/albums')(models);
const playlists=require('./routes/playlists')(models);
const invoice_item=require('./routes/invoice_items')(models);

//Establecer rutas de la API
app.use('/api/employees',employees);
app.use('/api/customers',customers);
app.use('/api/invoices',invoices);
app.use('/api/invoice_items',invoice_item);
app.use('/api/tracks',tracks);
app.use('/api/albums',albums);
app.use('/api/playlists',playlists);


app.all("/",(req,res)=>{
    res.render('index')
})

//Correr el servidor:
app.listen(port,()=>{
    console.log("Aplicación corriendo en el puerto "+port)
})
