const fs = require('fs');
const path = require('path');
const db = require ('../database/models')

const indexController = {
    home: (req, res) => {
        db.Product.findAll({
            include: [{association: "Mark"}]})
        .then(function(products){
        res.render('./main/home', {
         products
        });
    })
    .catch(function(err){
        console.log(err)
    })

    },
    search: (req, res) => {
		res.render("result")
	},
}

module.exports = indexController;



