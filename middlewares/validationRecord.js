//validator del registro
const uploadFile = require("../middlewares/multerStorange")
const multer = require("multer");
const { body } = require("express-validator");
const path = require('path');

const validationRecord = [
   body("first_name").notEmpty().withMessage("escribe tu nombre back").bail().isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
   body("last_name").notEmpty().withMessage("escribe tu apellido back").bail().isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'),
   body("user_name").notEmpty().withMessage("escribe tu nombre de usuario back").bail(),
   body("email").notEmpty().withMessage("escribe tu mail back").bail().isEmail().withMessage("debes escribir un formato de email valido"),
   body("password").notEmpty().withMessage("escribe una contraseña valida back").bail().isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
   // body("user_category").notEmpty().withMessage("seleciones una categoria").bail(),
   body("avatar").custom((values, { req }) => {

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

module.exports = validationRecord;