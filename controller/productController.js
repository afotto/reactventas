//Llamo al express-validator
const{validationResult} = require ('express-validator');

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

        res.redirect('/products');
    },

    edit: (req, res) => {
        //console.log('productController.edit');
        //console.log(req.params.id);
        let casa = productModel.find(req.params.id)

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
        res.render ('products/createProduct')
    },

    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('products/createProduct', {
				errors: resultValidation.mapped(),
				casa: req.body
                
			});
            
		}
        // Atrapo los contenido del formulario
        const product = req.body;
        // Verificar si viene un archivo, para nombrarlo  
        product.image = req.file ? req.file.filename : '';
        //Delego la responsabilidad al modelo para crear el producto
        productModel.create(product);

        res.redirect('/products')
    },
    
   
    update: (req, res) =>{
        const resultValidation = validationResult(req);
        let casa = req.body;
        casa.id = req.params.id;
        if(resultValidation.errors.length > 0 ){
            return res.render ('products/editProduct', {
                errors: resultValidation.mapped(),
                casa
            });
        }
        
        if (req.file===undefined) {
        casa.image = req.body.oldImage
        } else {
        casa.image = req.file.filename 
        }
        delete casa.oldImage;
        productModel.edit(casa);
        res.redirect('/products')
    }
}



module.exports = productController;