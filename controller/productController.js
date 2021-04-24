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
        //console.log('ESTOY ENTRANDO AL METODO EDIT:')

        let product = casas.find(function (value) {

            return value.id === req.params.id
        })

        //console.log(product)
        if (product) {
            res.render('products/editProduct', { product });
        } else {
            res.render('error404');
        }
    },

    showList: (req, res) => {
        res.render ('products/listProducts')
    }
    
}



module.exports = productController;