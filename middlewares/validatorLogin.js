//validator del login
const { check } = require ("express-validator");

 const validationLogin = [
   
    check("email").notEmpty().withMessage("escribe tu mail").bail().isEmail().withMessage("debes escribir un formato de correo valido"),
   
    check("password").notEmpty().withMessage("escribe una contraseña valida").bail(),
    

    ]

    module.exports = validationLogin;