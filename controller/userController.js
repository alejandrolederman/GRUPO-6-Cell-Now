const userController = {
    
    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formulario-registro');
    }
}

module.exports = userController;