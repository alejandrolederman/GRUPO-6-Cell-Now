
const User = require('../models/Users');

function adminMiddleware(req, res, next) {
	

	if(req.session.categoryAdmin == true){

        res.locals.isAdmin = true;
 }



	
	next();
}

module.exports = adminMiddleware;