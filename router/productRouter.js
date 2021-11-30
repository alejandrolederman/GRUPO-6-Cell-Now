const express = require('express');
const router = express.Router();
const multer = require("multer");


const productController = require('../controller/productController');

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productController.productDetail);

/*** GET ALL PRODUCTS ***/ 
router.get('/productsList', productController.productsList);

 /*** CREATE ONE PRODUCT ***/ 
 router.get('/create', productController.create); 
 
 router.post('/create', productController.store); 

 /*** EDIT ONE PRODUCT ***/ 
 router.get('/productEdit/:id', productController.edit); 
 
 router.put('/productEdit/:id', productController.update); 

 /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productController.destroy); 


module.exports = router;