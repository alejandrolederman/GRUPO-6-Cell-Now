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

    
    // Create -  Method to store
    storeUsers: (req, res) => {
        let errors = validationResult(req);
       if(errors.isEmpty()){

        const {
            first_name,
            last_name,
            username,
            email,
            password,
            category,
            image
            
        } = req.body;

        let cantidadUsuarios = 0;
        for (let i = 0; i < users.length; i++) {

            cantidadUsuarios = cantidadUsuarios + 1;
        };

        const data = {

            id: cantidadUsuarios,
            first_name:first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
            category: category,
            image: image
            }
            users.push(data);

		fs.writeFileSync(usersFilePath,JSON.stringify(users),'utf-8');
res.redirect("./login");
} else {
    res.render('./users/formularioRegistro', { errors: errors.array(), old: req.body
    
    });
}
    },

    // processRegistrer: (req, res) => {

    //     let errors = validationResult(req);
    //         res.send (errors);

    // },
        // return res.send({
        //     body: req.body,
        //     file: req.file
        // });
        //     const resultValidation = validationResult(req);
        //     if (resultValidation.errors.length > 0) {
        //         return res.render('./users/formularioRegistro',{

        //         } errors: resultVlidator.mapped(),
        //             oldDara: req.body
        //         });
        // },
    
    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;