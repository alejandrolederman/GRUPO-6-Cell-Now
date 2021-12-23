const fs = require('fs');
const path = require('path');
const User = require('../models/Users')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

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

    

    //  let errors = validationResult(req);
    //  if(errors.isEmpty()){
    //      for(let i = 0; i<users.length; i++){

    //          if ( users[i].email == req.body.email){

    //             break;
    //          }
    //      }




    //     if(usuarioALoguearse == undefined){
    //         return res.render ('./users/login', {errors:[
    //             {
    //                 msg: "credenciales no valida"
    //             } ] 
    //         })
    //     }
    //     req.session.usuarioLogueado = usuarioALoguearse;
    //     res.send("entraste");
    // } else {

    //     res.render('./users/login', { errors: errors.mapped(), old: req.body})



    registrer: (req, res) => {
        res.render('./users/formularioRegistro');
    },

    processRegistrer: (req, res) => {

        let userInDb = User.findByField("email", req.body.email);
        if (userInDb) {
            return res.render('./users/formularioRegistro', {
                errors: {
                    email: {
                        msg: "este email ya esta registrado"
                    }
                },
                old: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            pass: bcryptjs.hashSync(req.body.pass, 10),
            avatar: req.file.filename
        };

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            User.create(userToCreate);
            return res.redirect('./login');

        } else {
            res.render('./users/formularioRegistro', {
                errors: errors.mapped(),
                old: req.body
            })
        };
    },


    login: (req, res) => {
        res.render('./users/login');
    },

    
    loginProcess: (req, res) => {

        let userToLogin = User.findByField("email", req.body.email);

        if(userToLogin){
            let passOk = bcryptjs.compareSync(req.body.pass, userToLogin.pass)
            if(passOk){
                delete userToLogin.pass;
                req.session.userLogged = userToLogin;
                return res.redirect('./userProfile');
            }

            return res.render('./users/login', {
                errors: {
                    pass: {
                        msg: "las credenciales son invalidas"
                    }
                }   
            });

        }else{
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: "no se encontro el email en nuestra base de datos"
                    }
                }   
            });
        }
    },

    profile: (req, res) => {

     return res.render('./users/userProfile', {
			user: req.session.userLogged
		 });
	},

    logout: (req, res) => {

        req.session.destroy();
        return res.redirect ('/')
    },


    // let resultValidation = validationResult(req);

    // if(resultValidation.errors.length > 0){

    //     return res.render('./users/formularioRegistro', {
    //         errors: resultValidation.mapped(),
    //         oldData: req.body
    //     });
    // }

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


    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;