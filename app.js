const express = require('express')
const app = express()

const path = require('path');
const puerto = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get('/', (req, res) => {
    res.render('index')
});

/*app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});*/

app.get('/login/', (req, res) => {
    res.render('login')
});

app.get('/productCart/', (req, res) => {
    res.render('productCart')
});

app.get('/productDetail/', (req, res) => {
    res.render('productDetail')
});

app.get('/register/', (req, res) => {
    res.render('register')
});



