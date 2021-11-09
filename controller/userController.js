const userController = {
    
    login: (req, res) => {
        res.render('./users/login');
    },

    registrer: (req, res) => {
        res.render('./users/formulario-registro');
    },

    selecBuyOrSell:(req, res)=>{
        res.render('./users/selecBuyOrSell');
    }
}

module.exports = userController;