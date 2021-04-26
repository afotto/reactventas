//requerimos el array de casas
let casas = require ('../data/datosProductos')

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

    showList: (req, res) => {
        res.render ('products/listProducts', {casas})
    },

    showCreate: (req, res) => {
        res.render('./products/newProduct.ejs');
    },

    showCreado: (req, res) => {
        res.send("Recibe datos de formulario");
    }
    
}



module.exports = productController;