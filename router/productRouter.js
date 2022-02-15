const express = require('express');
const router = express.Router();
const multer = require("multer");
const uploadFilePproducts = require ("../middlewares/multerStorangeProduct")
const productController = require('../controller/productController');


/*** TRAER UN SOLO PRODUCTO ***/
router.get('/detail/:id', productController.productDetail);

/*** TRAER TODOS LOS PRODUCTOS ***/ 
router.get('/productsList', productController.productsList);

 /*** CREAR UN PRODUCTO ***/ 
 router.get('/productsForm', productController.crear); 
 
 router.post('/productsForm',uploadFilePproducts.single('image'), productController.store); 

 /*** EDITAR UN PRODUCTO ***/ 
 router.get('/productEdit/:id', productController.edit); 
 
 router.post('/productEdit/:id',uploadFilePproducts.single('image'), productController.actualizar); 

 /*** ELIMINAR UN PRODUCTO***/ 
 router.get('/productDelete/:id', productController.unProductoDelete);

 router.post("/delete/:id", productController.eliminar);               

/*** VENDER UN PRODUCTO***/ 

router.get('/confirmVenta/:id', productController.confirmarVenta);

 router.post("/productoVendido/:id", productController.borrar);


module.exports = router;