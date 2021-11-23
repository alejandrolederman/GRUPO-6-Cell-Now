const userController = {

    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formulario-registro');
    },

    selecBuyOrSell: (req, res) => {
        res.render('./users/selecBuyOrSell');
    },

    home: (req, res) => {
        res.render("home");
    },
}

module.exports = userController;