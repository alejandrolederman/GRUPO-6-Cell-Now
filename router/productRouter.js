const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/comprar', productController.product);

router.get ('/productForm', productController.productForm)

router.get ('/productEdit', productController.productEdit)

module.exports = router;