

function guestMiddlewares(req, res, next){

    if(req.session.userLogged){

        return res.redirect('./logueado')
    }
};

module.exports= guestMiddlewares;