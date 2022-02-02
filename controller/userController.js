const fs = require('fs');
const path = require('path');
// const User = require('../models/Users')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")

// const usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

    /////////////////////////////////////////////
    usersList: (req, res) => {
        res.render('./users/usersList', {
            users
        });
    },
    
///////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////    

    // registrer: (req, res) => {

    //     res.cookie("testing", "hola mundo", {maxAge: 1000 * 30})

    //     res.render('./users/formularioRegistro');
    // },

    crear: function (req, res){
        db.user_category.findAll()
        .then(function(categoria){
            return res.render("./users/formularioRegistro" , {categoria:categoria})
        })
        .catch(function(err){
            console.log(err)
        })
    },

////////////////////////////////////////////////////////////////////////////
    guardar: function (req, res){
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('./users/formularioRegistro', {
				errors: resultValidation.mapped(),
				old: req.body 
			});
		}

        let userInDB = db.users.findOne({where: { email: req.body.email }})
        if (userInDB) {
            		return res.render('./users/formularioRegistro', {
            			errors: {
            				email: {
            					msg: 'Este email ya está registrado'
            				}
            			},
            			old: req.body
            		});
            	}
                else {
                    
                    user ={
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user_name:req.body.user_name,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password, 10),
                category: req.body.user_category,
                avatar: req.body.avatar
                    }}

        return res.redirect('./login');
    },
    // processRegistrer: (req, res) => {
		// const resultValidation = validationResult(req);
	// 	let userInDB = User.findByField('email', req.body.email);

	// 	if (userInDB) {
	// 		return res.render('./users/formularioRegistro', {
	// 			errors: {
	// 				email: {
	// 					msg: 'Este email ya está registrado'
	// 				}
	// 			},
	// 			old: req.body
	// 		});
	// 	};

	// 	let userToCreate = {
	// 		...req.body,
	// 		pass: bcryptjs.hashSync(req.body.pass, 10), // contraseña 1234 -> #$#FGGGRR$$#$% 
	// 		avatar: req.file.filename
	// 	};
	// 	return res.redirect('./login');
    // },

///////////////////////////////////////////////////////////////////////////////////////////    

    login: (req, res) => {
        res.render('./users/login');
    },

//////////////////////////////////////////////////////////////////////////////////////////////    

    loginProcess: (req, res) => {
        //revicion de que email no esta vacio
        if (req.body.email == 0) {
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Ingrese un email registrado'
                    }
                }
            });
        }

        let userToLogin = db.users.findOne({where: { email: req.body.email }})

        .then(function(usuario){

        if(usuario){
            let passOk = bcryptjs.compareSync(req.body.password, usuario.password)
            if(passOk){
                delete usuario.password;

                req.session.userLogged = usuario;

                if(usuario.category == "admin"){

                    categoryAdmin = true;
                }

                if(req.body.remember) {

					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

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
    })
    },

//////////////////////////////////////////////////////////////////////////////////////////////    

    profile: (req, res) => {

     return res.render('./users/userProfile', {
			user: req.session.userLogged
		 });
	},


//////////////////////////////////////////////////////////////////////////////////////////////    

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect ('/')
    },

///////////////////////////////////////////////////////////////////////////////////////////////

    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },


/////////////////////////////////////////////////////////////////////////////////////////////////

    home: (req, res) => {
        res.render("home");
    },
//////////////////////////////////////////////////////////////////////

}

module.exports = userController;