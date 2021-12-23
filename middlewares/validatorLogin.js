//validator del login
const { check } = require ("express-validator");

 const validationLogin = [
   
    check("email").notEmpty().withMessage("escribe tu mail").bail().isEmail().withMessage("debes escribir un formato de correo valido"),
   
    check("pass").notEmpty().withMessage("escribe una contraseña valida").bail(),
    

    ]

    module.exports = validationLogin;