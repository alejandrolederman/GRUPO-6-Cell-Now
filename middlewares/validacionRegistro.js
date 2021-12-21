//validator
const { body } = require ("express-validator");

 const validations = [
    body("first_name").notEmpty().withMessage("escribe tu nombre").bail(),
    body("last_name").notEmpty().withMessage("escribe tu apellido").bail(),
    body("email").notEmpty().withMessage("escribe tu mail").bail().isEmail().withMessage("debes escribir un formato de correo valido"),
    body("username").notEmpty().withMessage("escribe tu nombre de usuario").bail(),
    body("pass").notEmpty().withMessage("escribe una contraseña valida").bail(),
    body("passConfirm").notEmpty().withMessage("escribe la misma contraseña").bail(),

    ]

    module.exports = validations;