const express = require('express');
const router = express.Router();
const controladorproduct = require('../controller/productController');

router.get('/productDetail/', controladorproduct.showDetalle);
router.get('/productCart/', controladorproduct.showCarrito);
router.get('/products/edit:id', controladorproduct.showEdit);
router.get('/products/listado', controladorproduct.showList);

module.exports = router;