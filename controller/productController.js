//Llamo al modelo
const jsonDB = require ('../model/jsonDatabase');
//Traigo los métodos para producto
const productModel = jsonDB ('products');

let productController = {

    showDetalle: (req, res) => {
            res.render('products/productDetail')
        },

    showCarrito: (req, res) => {
        res.render('products/productCart')
    },

    showEdit: (req, res) => {
       let product = casas.find(function (value) {

            return value.id === req.params.id
        })

        if (product) {
            res.render('products/editProduct', { product });
        } else {
            res.render('error404');
        }
    },

    list: (req, res) => {
        let casas = productModel.all(); 
        console.log(casas[2]);
         res.render ('products/listProducts', {casas});
    },

    create: (req, res) => {
        res.render ('products/newProduct')
    },

    store: (req, res) => {
        // Atrapo los contenido del formulario
        const product = req.body;
        // Verificar si viene un archivo, para nombrarlo  
        product.image = req.file ? req.file.filename : '';
        //Delego la responsabilidad al modelo para crear el producto
        productModel.create(product);

        res.redirect('/')
    },
    
    showDelete: (req,res) => {
        res.send('Recibe datos de elemento borrado');
    }
}



module.exports = productController;