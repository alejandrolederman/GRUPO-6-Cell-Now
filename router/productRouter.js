const express = require('express');
const router = express.Router();
const multer = require("multer");


const productController = require('../controller/productController');

router.get('/detail/:id', productController.productDetail);

router.get('/productsList', productController.productsList);



 /*** CREATE ONE PRODUCT ***/ 
 router.get('/create', productController.create); 
 
 router.post('/create', productController.store); 

// /*** EDIT ONE PRODUCT ***/ 
// router.get('/edit/:id', productsController.edit); 
//  router.put('/edit/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/:id', productsController.destroy); 


// router.get ('/producstForm', productController.productFormCreate)

// router.delete('/:id', productController.producDelete);

module.exports = router;