const express = require('express');
const router = express.Router();
const multer = require("multer");


const productController = require('../controller/productController');

router.get('/detail/:id', productController.productDetail);

router.get('/productsList', productController.productsList);

// router.get ('/producstForm', productController.productFormCreate)

// router.delete('/:id', productController.producDelete);

module.exports = router;