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




router.get('/detail/', controladorproduct.detalle);

router.get('/cart/', controladorproduct.carrito);

router.get('/edit:id', controladorproduct.edit);

router.get('/listado',controladorproduct.list);
router.put('/listado',controladorproduct.list);
router.delete('/listado',controladorproduct.delete);

//Ottonello - Alta de producto sprint4
router.get('/create', controladorproduct.create);
router.post('/store', upload.single('image'), controladorproduct.store);


module.exports = router;