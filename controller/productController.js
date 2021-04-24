let productController = {

    showDetalle: (req, res) => {
            res.render('products/productDetail')
        },

    showCarrito: (req, res) => {
        res.render('products/productCart')
    }
    
}



module.exports = productController;