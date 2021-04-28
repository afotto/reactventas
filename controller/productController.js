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
        console.log(casas)
        res.render ('products/listProducts', {casas})
    },

    create: (req, res) => {
        res.render ('products/newProduct')
    },

    store: (req, res) => {
        // Atrapo los contenido del formulario
        const product = req.body;
        // Verificar si viene un archivo, para nombrarlo  
        product.image = req.file ? req.file.filename : '';
        // El id
        let id = casas.length + 1;
        product.id = id.toString();
        console.log(product);

        casas.push(product);

        res.redirect('/')
    },
    
    showDelete: (req,res) => {
        res.send('Recibe datos de elemento borrado');
    }
}



module.exports = productController;