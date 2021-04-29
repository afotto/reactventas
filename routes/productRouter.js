const express = require('express');
const router = express.Router();

const controladorproduct = require('../controller/productController');

//Configuración de multer para archivo de producto
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });




router.get('/productDetail/', controladorproduct.showDetalle);

router.get('/productCart/', controladorproduct.showCarrito);

router.get('/products/edit:id', controladorproduct.showEdit);

router.get('/products/listado',controladorproduct.list);
router.put('/products/listado',controladorproduct.list);
router.delete('/products/listado',controladorproduct.showDelete);

//Ottonello - Alta de producto sprint4
router.get('/products/create', controladorproduct.create);
router.post('/products/store', upload.single('image'), controladorproduct.store);


module.exports = router;