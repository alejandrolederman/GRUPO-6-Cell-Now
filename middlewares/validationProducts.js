//validator del registro
const uploadFile = require("../middlewares/multerStorangeProduct")
const multer = require("multer");
const { body } = require("express-validator");
const path = require('path');

const validationProduct = [
   body("model").notEmpty().withMessage("escribe tu nombre de tu  modelo").bail().isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),
   body("description").notEmpty().withMessage("escribe una descripcion del telefono").bail().isLength({min: 20}).withMessage('Este campo debe tener min 20 caracteres'),
   body("image").custom((values, { req }) => {

      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", "jpeg"];

      if (!file) {
         throw new Error("tenes que subir una imagen")
      } else {

         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {

            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
         };
      };
      return true;
   })
]

module.exports = validationProduct;