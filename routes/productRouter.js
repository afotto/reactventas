const express = require('express');
const router = express.Router();
const controladorproduct = require('../controller/productController');

router.get('/productDetail/', controladorproduct.showDetalle);
router.get('/productCart/', controladorproduct.showCarrito);

module.exports = router;