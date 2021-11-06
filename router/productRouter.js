const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/comprar', productController.product);

module.exports = router;