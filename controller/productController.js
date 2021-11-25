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

    productList:(req, res) => {
        res.render('./products/productList', {visited : products});
    },

    productFormCreate: (req, res) => {

        // falta la logica de creacion de producto

        res.render('./products/producstForm');
    },

    
    productEdit:(req, res) => {
        res.render('./products/productEdit');
    },

    producDelete:(req, res) => {
      //La accion de borrado de producto
        
        let idCelular = req.params.id;
            products = products.filter(unProducto => { 
            return unProducto.id != idCelular;
                
        })
             res.render('./products/productList',{products});
    },

    productFormEdit:(req, res) => {
            // Renderizar la vista del formulario de actualizacion de producto
             res.render('./products/productList');
     },
     productEditUpdate:(req, res) => {
             // La accion de actualizacion de producto
             res.render('./products/productList');
    },

    


//     // CRUD
//    
//     createProductForm:(req, res) => {
//         // Renderizar la vista del formulario
//         res.render('./products/productList');
//     },
//     detailProduct:(req, res) => {
//         let id = req.params.id;
//         let productoBuscado = products.find(product => product.id == id);
//         res.send(productoBuscado != null ? productoBuscado : 'Producto no encontrado');
//     },
//     createProduct:(req, res) => {
//         // Va a tener la logica de creacion del producto 
//         res.render('./products/productsForm');
//     },
//     updateProductForm:(req, res) => {
//         // Renderizar la vista del formulario de actualizacion de producto
//         res.render('./products/productList');
//     },
//     updateProduct:(req, res) => {
//         // La accion de actualizacion de producto
//         res.render('./products/productList');
//     },

}

module.exports = productController;