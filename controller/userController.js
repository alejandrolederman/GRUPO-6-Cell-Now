const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")

const userController = {
    ///////////////////////////////////////////////////////////////
    //llama a la lista de usuarios de la base de datos
    usersList: (req, res) => {
        db.User.findAll({
            include: [{association: "UserCat"}]})
        .then(function(usuarios){
            res.render('./users/usersList', {usuarios});
        })
        .catch(function(err){
            console.log(err)
        }) 
    },
    
///////////////////////////////////////////////////////////////////
    //detalle de usuario
    usersDetail: (req, res) => {
        db.User.findByPk(req.params.id, {  
        include: [{ association : "UserCat"}]})
        .then(function(usuario){
            res.render('./users/usersDetail', {usuario})  
        })
        .catch(function(err){
            console.log(err)
        }) 
    },

///////////////////////////////////////////////////////////    
    // llama al formulario de creacion de usuarios
    crear: function (req, res){
        return res.render("./users/formularioRegistro")
               
    },

///////////////////////////////////////////////////////////////////////////////////////
    // guarda el usuario creado en la base de datos, validando los datos ingresados 
    guardar: function(req, res){
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('./users/formularioRegistro', {
				errors: resultValidation.mapped(),
                old: req.body
			});
		}
        
        db.User.findOne({where: { email: req.body.email } || null})
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
            }      
            db.User.create({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                userName:req.body.user_name,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password, 10),
                usercategoryId: 5 ,
                avatar: req.file.filename
                })
                   
             res.redirect('./login');
        })
        .catch(function(err){
            console.log(err)
        })
    },
    
////////////////////////////////////////////////////////////////////////////////// 
    //llama al formulario de login para ingresar
    login: (req, res) => {
        res.render('./users/login');
    },

////////////////////////////////////////////////////////////////////////////////// 
    // valida el login y guarda en session y cookie al usuario registrado
    loginProcess: (req, res) => {
        //revicion de que email no esta vacio
        if (req.body.email == 0) {
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Ingrese un email registrado'
                    }
                }
            });
        }
        //busca el mail en la base de datos
        db.User.findOne({where: { email: req.body.email }})
        .then(function(userToLogin){ 
            //si esta confirma que la contraseña sea correcta
            console.log(userToLogin);
            if(userToLogin){
                let passOk = bcryptjs.compareSync(req.body.password, userToLogin.password);        
                if(passOk){ //si es correcta lo pone en seccion inicada 
                    console.log(passOk);
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    //lo guarda en cookys
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: ((1000 * 60) * 60) * 60 })
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
    // llama al formulario de edicion
    edit: (req, res) => {
        let pedidoUsuario = db.User.findByPk(req.params.id)
        let pedidoCategoria = db.Usercategory.findAll() 

        Promise.all ([pedidoUsuario, pedidoCategoria])
        .then(function([unUser, unaCat]){
            res.render('./users/userEdit', {unUser:unUser, unaCat:unaCat})  
        })
        .catch(function(err){
            console.log(err)
        }) 
    },       

    ///////////////////////////////////////////////////////////////
    // actualiza al usuario
    actualizar: (req, res) => {
         
            db.User.update({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                userName:req.body.user_name,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password, 10),
                usercategoryId: req.body.user_category,
                avatar: req.file ? req.file.filename : req.body.oldImagen,
            },
            {
                where: {
                    id:req.params.id
                }
            })
            res.redirect('/') 
    },

//////////////////////////////////////////////////////////////////////////////////////////////    
    //
    profile: (req, res) => {
        return res.render('./users/userProfile', {
			users: req.session.userLogged
		 });
	},
//////////////////////////////////////////////////////////////////////////////////////////////    
    //saca al usuario de la session
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect ('/')
    },

///////////////////////////////////////////////////////////////////////////////////////////////
    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

///////////////////////////////////////////////////////////////////////////////////////////////
    // trae al usuario para su borrado de la base de datos
    unUsuarioDelete: (req,res)=>{
        db.User.findByPk(req.params.id,{
            include: [{association: "UserCat"}]})
        .then(function(unUser){
            res.render('./users/userDelete', {unUser})  
        })
        .catch(function(err){
            console.log(err)
        }) 
    },

////////////////////////////////////////////////////////////////////////////////////////////
    // borra al usuario de la base de datos
    eliminar: (req,res) =>{
        db.User.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/'))
        .catch(error => console.log(error))
    },


/////////////////////////////////////////////////////////////////////////////////////////////////
    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;