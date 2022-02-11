const express = require('express');
const router = express.Router();
const multer = require("multer");
const uploadFilePproducts = require ("../middlewares/multerStorangeProduct")
const productController = require('../controller/productController');


/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productController.productDetail);

/*** GET ALL PRODUCTS ***/ 
router.get('/productsList', productController.productsList);

 /*** CREATE ONE PRODUCT ***/ 
 router.get('/productsForm', productController.crear); 
 
 router.post('/productsForm',uploadFilePproducts.single('image'), productController.store); 

 /*** EDIT ONE PRODUCT ***/ 
 router.get('/productEdit/:id', productController.edit); 
 
 router.post('/productEdit/:id',uploadFilePproducts.single('image'), productController.actualizar); 

 /*** DELETE ONE PRODUCT***/                

// router.get('/productoVendido', productController.venta);

router.get('/confirmVenta/:id', productController.confirmarVenta);

 router.post("/productoVendido/:id", productController.borrar);


module.exports = router;