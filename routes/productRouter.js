const express = require('express');
const router = express.Router();

const controladorproduct = require('../controller/productController');

//Configuración de multer para archivo de producto
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images/products'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/detail/', controladorproduct.detalle);
router.get('/cart/', controladorproduct.carrito);

router.get('/',controladorproduct.list);

//Ottonello - Alta de producto sprint4
router.get('/create', controladorproduct.create);
router.post('/', upload.single('image'), controladorproduct.store);

router.get('/:id', controladorproduct.detalleCrud);

router.delete('/:id' , controladorproduct.delete );




router.get('/:id/edit', controladorproduct.edit);
router.put('/:id/edit', upload.single('image'), controladorproduct.update);








module.exports = router;