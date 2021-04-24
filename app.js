const express = require('express')
const app = express()

const path = require('path');
const puerto = process.env.PORT;

//Traemos la inforamción de las rutas
const homeRouter = require ('./routes/homeRouter');
const productRouter = require ('./routes/productRouter');
const userRouter = require ('./routes/userRouter');

app.use(express.static('public'));

//Configuramos ejs
app.set('view engine', 'ejs')

//Damos de alta el puerto
app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

//Llamamos al ruteo
app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/', productRouter);














