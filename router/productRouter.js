const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/detail', productController.product);

router.get('/productList', productController.productList);

router.get ('/productForm', productController.productForm)

router.get ('/productEdit', productController.productEdit)

module.exports = router;