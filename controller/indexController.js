const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const indexController = {
    home: (req, res) => {
        res.render('./main/home', {
            visited : products
        });
    },
    search: (req, res) => {
		res.render("result")
	},
}

module.exports = indexController;



