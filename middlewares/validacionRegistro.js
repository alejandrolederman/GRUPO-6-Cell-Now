//validator
const { body } = require ("express-validator");

 const validations = [
    body("first_name").notEmpty().withMessage("escribe tu nombre").bail(),
    body("last_name").notEmpty().withMessage("escribe tu apellido").bail(),
    body("email").isEmail().withMessage("escribe tu mail").bail(),
    ]

    module.exports = validations;