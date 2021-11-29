const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    productDetail: (req, res) => {
		let elId = req.params.id;
		let productos = products.find(unProducto => {
			if (unProducto.id == elId){
				return unProducto;
			}	
		});
		res.render('./products/detail',{ productos, products})
	},

   // Root - Show all products
	productList: (req, res) => {
		res.render("/products/porductList", {
			productos : products
		});
	},

    productFormCreate: (req, res) => {

        // falta la logica de creacion de producto

        res.render('./products/producstForm');
    },

    productEdit:(req, res) => {

        //flalta la logica de editar producto
        res.render('./products/productEdit');
    },

    producDelete:(req, res) => {
      //La accion de borrado de producto
        
        res.render('./products/productList',{products});
    },

 
}

module.exports = productController;