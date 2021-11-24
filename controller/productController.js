const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    product: (req, res) => {
        res.render('./products/detail');
    },

    productForm: (req, res) => {
        res.render('./products/productForm');
    },

    productEdit:(req, res) => {
        res.render('./products/productEdit');
    },

    productList:(req, res) => {
        res.render('./products/productList', {visited : products});
    },


    // CRUD
    getAllProducts:(req, res) => {
        res.send(products)
    },
    createProductForm:(req, res) => {
        // Renderizar la vista del formulario
        res.render('./products/productList');
    },
    detailProduct:(req, res) => {
        let id = req.params.id;
        let productoBuscado = products.find(product => product.id == id);
        res.send(productoBuscado != null ? productoBuscado : 'Producto no encontrado');
    },
    createProduct:(req, res) => {
        // Va a tener la logica de creacion del producto (lo tienn que agregar al json)
        res.render('./products/productList');
    },
    updateProductForm:(req, res) => {
        // Renderizar la vista del formulario de actualizacion de producto
        res.render('./products/productList');
    },
    updateProduct:(req, res) => {
        // La accion de actualizacion de producto
        res.render('./products/productList');
    },
    deleteProduct:(req, res) => {
        // La accion de borrado de producto

        let idCelular = req.params.id;
        products = products.filter(unProducto => { 
         return unProducto.id != idCelular;
        
        })
        res.render('./products/productList',{products});
    }
}

module.exports = productController;