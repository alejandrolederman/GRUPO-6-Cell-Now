//multer
const multer = require("multer");
const path = require('path')


const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null,'./public/img/products');
   },
   filename: (req, file, cb) => {
       let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
       cb(null, filename);
   }
})
const uploadFileProduct = multer({ storage });
module.exports = uploadFileProduct;