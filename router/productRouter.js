const express = require('express');
const router = express.Router();
const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/img')
//     },
//     filename: function (req, file, cb) {
//       const newFile = file.fieldname + '-' + Date.now();
//       cb(null, newFile)
//     }
//   })
  
//   const upload = multer({ storage: storage })

const productController = require('../controller/productController');

router.get('/detail/:id', productController.productDetail);

router.get('/productList', productController.productList);

router.get ('/productForm', productController.productForm)



// CRUD

// router.get('/', productController.getAllProducts);

// router.get('/create', productController.createProductForm);
// // router.post('/', upload.single('fileImage'),productsController.store); 

// router.get('/detail/:id/', productController.detailProduct);

// router.post('/', productController.createProduct);

// router.get('/:id/productEdit', productController.updateProductForm);

// router.put('/:id', productController.updateProduct);

// router.delete('/:id', productController.deleteProduct);

module.exports = router;










// /*** EDIT ONE PRODUCT ***/ 
// router.get('/:id/edit', productsController.edit); 
// router.put('/:id', upload.single('fileImage'),productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.delete('/:id', productsController.destroy); 