//validator del login
const { check } = require ("express-validator");

 const validationLogin = [
    check("first_name").notEmpty().withMessage("escribe tu nombre").bail(),
    check("last_name").notEmpty().withMessage("escribe tu apellido").bail(),
    check("email").notEmpty().withMessage("escribe tu mail").bail().isEmail().withMessage("debes escribir un formato de correo valido"),
    check("username").notEmpty().withMessage("escribe tu nombre de usuario").bail(),
    check("pass").notEmpty().withMessage("escribe una contraseña valida").bail(),
    check("passConfirm").notEmpty().withMessage("escribe la misma contraseña").bail(),

    ]

    module.exports = validationLogin;