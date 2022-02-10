const fs = require('fs');
const path = require('path');
// const User = require('../models/Users')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")

// const usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

    ///////////////////////////////////////////////////////////////
    usersList: (req, res) => {
        db.users.findAll()
        .then(function(usuarios){
            res.render('./users/usersList', {usuarios:usuarios});
        })
        .catch(function(err){
            console.log(err)
        }) 
    },
    
///////////////////////////////////////////////////////////////////
    usersDetail: (req, res) => {
        db.users.findByPk(req.params.id)
        .then(function(usuario){
            res.render('./users/usersDetail', {usuario:usuario})  
        });
    },

///////////////////////////////////////////////////////////    
    crear: function (req, res){
        db.userCategory.findAll()
        .then(function(categoria){
            return res.render("./users/formularioRegistro" , {categoria:categoria})
        })
        .catch(function(err){
            console.log(err)
        })
    },

////////////////////////////////////////////////////////////////////////////
    guardar: function (req, res){
        // const resultValidation = validationResult(req);
        // if (resultValidation.errors.length > 0) {
		// 	return res.render('./users/formularioRegistro', {
		// 		errors: resultValidation.mapped(),
		// 		old: req.body
		// 	});
		// }

        db.users.findOne({where: { email: req.body.email }})
        .then( function(userInDB){
            if (userInDB) {
                return res.render('./users/formularioRegistro', {
            	    errors: {
            	    	email: {
            	    		msg: 'Este email ya está registrado'
            	    	}
            	    },
            	    old: req.body
        	    });
            }else {
                    
                db.users.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    user_name:req.body.user_name,
                    email: req.body.email,
                    password:bcryptjs.hashSync(req.body.password, 10),
                    user_category_id: req.body.user_category,
                    avatar: req.body.avatar
                })
            }

            return res.redirect('./login');
        });
    },
    

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
        //busca el mail en la base de datos
        db.users.findOne({where: { email: req.body.email }})
        .then(function(userToLogin){
            
            //si esta confirma que la contraseña sea correcta
            if(userToLogin){
                let passOk = bcryptjs.compareSync(req.body.password, userToLogin.password);        
                if(passOk){ //si es correcta lo pone en seccion inicada 
                    console.log(passOk);
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    //lo guarda en cookys
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    };
                    
                    res.redirect('./userProfile');
                }

                res.render('./users/login', {
                    errors: {
                        pass: {
                            msg: "las credenciales son invalidas"
                        }
                    }   
                });
            }

            res.render('./users/login', {
                errors: {
                    email: {
                        msg: "no se encontro el email en nuestra base de datos"
                    }
                }   
            });
        })

        .catch(function(err){
            console.log(err)
        })
    },
//////////////////////////////////////////////////////////////////////////////////////////////    

    profile: (req, res) => {

     return res.render('./users/userProfile', {
			users: req.session.userLogged
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