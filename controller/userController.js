const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');


const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userController = {

     // Root - Show all products
     usersList: (req, res) => {
        res.render('./users/usersList', {
           users
        });
    },

    usersDetail: (req, res) => {
        let elId = req.params.id;
        let usuario = users.find(unUsuario => {
            if (unUsuario.id == elId) {
                return unUsuario;
            }
        });
        res.render('./users/usersDetail', {
            usuario,
            users
        });
    },

    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formularioRegistro');
    },

    processRegistrer: (req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
        //     const resultValidation = validationResult(req);
        //     if (resultValidation.errors.length > 0) {
        //         return res.render('./users/formularioRegistro',{

        //         } errors: resultVlidator.mapped(),
        //             oldDara: req.body
        //         });
        // },
    },
    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;