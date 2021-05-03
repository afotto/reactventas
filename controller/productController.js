//Llamo al modelo
const jsonDB = require ('../model/jsonDatabase');
//Traigo los métodos para producto
const productModel = jsonDB ('products');

let productController = {

    detalle: (req, res) => {
            res.render('products/productDetail')
        },

    detalleCrud: (req, res) => {
            let casa = productModel.find(req.params.id)
            if (casa) {
                res.render('products/detalleCrud', {casa});
            } else {
                res.render('error404');
            }
        },
    carrito: (req, res) => {
        res.render('products/productCart')
    },
    
    delete: (req,res) => {
        console.log('borrado')
        productModel.delete(req.params.id);  

        res.redirect('/');
    },

    edit: (req, res) => {
        console.log('productController.edit');
        console.log(req.params.id);
        let casa = productModel.find(req.params.id)
        console.log(casa)


        if (casa) {
            res.render('products/editProduct', {casa});
        } else {
            res.render('error404');
        }
    },

    list: (req, res) => {
        let casas = productModel.all(); 
        //console.log(casas[2]);
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

        res.redirect('/products')
    },
    
   
    update: (req, res) =>{
        //console.log('Entro en update');
        let casa = req.body;
        //console.log(casa);
        //console.log('estoy buscando id');
       // console.log(req.params.id);
        casa.id = req.params.id;

        casa.image = req.file ? req.file.filename : '';
        productModel.edit(casa);
        res.redirect ('/products');
    },
}



module.exports = productController;