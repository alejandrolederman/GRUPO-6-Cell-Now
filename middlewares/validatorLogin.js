//validator del login
const { body } = require ("express-validator");

 const validationLogin = [
   
  body("email").notEmpty().withMessage("escribe tu mail back").bail().isEmail().withMessage("debes escribir un formato de email valido"),
   
  body("password").notEmpty().withMessage("escribe una contraseña valida").bail().isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    

]

    module.exports = validationLogin;