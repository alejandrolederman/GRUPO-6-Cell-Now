//validator del registro
const uploadFile = require("../middlewares/multerStorange")
const multer = require("multer");
const { body } = require("express-validator");
const path = require('path');

const validationRecord = [
   body("first_name").notEmpty().withMessage("escribe tu nombre").bail(),
   body("last_name").notEmpty().withMessage("escribe tu apellido").bail(),
   body("user_name").notEmpty().withMessage("escribe tu nombre de usuario").bail(),
   body("email").notEmpty().withMessage("escribe tu mail").bail().isEmail().withMessage("debes escribir un formato de correo valido"),
   body("password").notEmpty().withMessage("escribe una contraseña valida").bail(),
   // body("user_category").notEmpty().withMessage("seleciones una categoria").bail(),
   body("avatar").custom((values, { req }) => {

      let file = req.file;
      let acceptedExtensions = [".jpg", ".png"];

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