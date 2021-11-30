const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {


    productDetail: (req, res) => {
        let elId = req.params.id;
        let productos = products.find(unProducto => {
            if (unProducto.id == elId) {
                return unProducto;
            }
        });
        res.render('./products/detail', {
            productos,
            products
        })
    },

    // Root - Show all products
    productsList: (req, res) => {
        res.render('./products/productsList', {
            products
        });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("productsForm");
    },

    // Create -  Method to store
    store: (req, res) => {
        const {
            marca,
            name,
            price,
            discount,
            camara,
            description,
            desbloqueo,
            pantalla,
            memoria,
            image,
            type
        } = req.body;

        let cantidadProductos = 0;
        for (let i = 0; i < products.length; i++) {

            cantidadProductos = cantidadProductos + 1;
        };

        let data = {

                id: cantidadProductos,
                marca: marca,
                name: name,
                description: description,
                price: price,
                discount: discount,
                camara: camara,
                desbloqueo: desbloqueo,
                pantalla: pantalla,
                memoria: memoria,
                image: image,
                type: type
            },      
    }
}
;

module.exports = productController;