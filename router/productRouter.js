const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/detail', productController.product);

router.get('/productList', productController.productList);

router.get ('/productForm', productController.productForm)

router.get ('/productEdit', productController.productEdit)

// CRUD

router.get('/', productController.getAllProducts);

router.get('/create', productController.createProductForm);

router.get('/:id', productController.detailProduct);

router.post('/', productController.createProduct);

router.get('/:id/edit', productController.updateProductForm);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;