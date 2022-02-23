
const db = require("../database/models")

function userLoggedMiddleware(req, res, next) {
	res.locals.userLogged = false;

	if(req.session.userLogged){

		res.locals.userLogged = req.session.userLogged;

	} else if(req.cookies.userEmail){
		db.User.findOne({
			where: {
				email: req.cookies.email
			 }
		})
		.then(user =>{

			req.session.userLogged = user;
			res.locals.userLogged = user
		})

		.catch(function(err){
            console.log(err)
        })
	}

	next();

}

module.exports = userLoggedMiddleware;