function guestMiddlewares(req, res, next) {

    if (req.session.userLogged) {

        return res.redirect('./userProfile')
    }
    next()
};

module.exports = guestMiddlewares;