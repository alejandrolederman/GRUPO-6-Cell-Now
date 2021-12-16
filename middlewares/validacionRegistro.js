//validator
const { check } = require ("express-validator");

 const validations = [
    check("first_name").notEmpty().withMessage("escribe tu nombre").bail(),
    check("last_name").notEmpty().withMessage("escribe tu apellido").bail(),
    check("email").isEmail().withMessage("escribe tu mail").bail(),
    ]

    module.exports = validations;