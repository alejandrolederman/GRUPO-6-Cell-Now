const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const userController = {

    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formularioRegistro');
    },

    processRegistrer: (req, res) => {

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/formularioRegistro',{
                
            } errors: resultVlidator.mapped(),
                oldDara: req.body
            });
    },

    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;