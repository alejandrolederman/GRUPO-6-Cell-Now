const bcryptjs = require ('bcryptjs');
const {validationResult} = require ('express-validator');
const userController = {

    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formularioRegistro');
    },

    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;