const fs = require('fs');
const path = require('path');
const db = require("../database/models")

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

    // Root - Show all products
    productsList: (req, res) => {
        res.render('./products/productsList', {
            products
        });
    },

    // Detail - Detail from one product
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

    // Create - Form to create
    crear: (req, res) => {
        res.render("./products/productsForm");
    },

    // Create -  Method to store
    

            // let cantidadProductos = 0;
            // for (let i = 0; i < products.length; i++) {
   
            //     cantidadProductos = cantidadProductos + 1;
            // };
            store: (req, res) => {
        db.Producto.create(
            {

            mark_id: req.body.mark,
            model_id: req.body.model,
            price: req.body.price,
            description: req.body.description,
            camera: req.body.camera,
            screen: req.body.screen,
            memory: req.body.memory,
            unlocking: req.body.unlocking,
            image: req.body.image,
        }
        );

        res.redirect("/");


        // const {mark, model, price, camera, description,
        //     unlocking, screen, memory, image } = req.body;

        //  let cantidadProductos = 0;
        //  for (let i = 0; i < products.length; i++) {

        //      cantidadProductos = cantidadProductos + 1;
        //  };

        // const data = {

        //     id: cantidadProductos,
        //     mark: mark,
        //     model: model,
        //     price: price,
        //     description: description,
        //     camera: camera,
        //     screen: screen,
        //     memory: memory,
        //     unlocking: unlocking,
        //     image: image,
        // };
        // products.push(data);

        // fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
        

    },

    // Update - Form to edit
    edit: (req, res) => {

        let elId = req.params.id;
        let productos = products.find(unProducto => {
            if (unProducto.id == elId) {
                return unProducto;
            }
        });
        res.render('./products/productEdit', { productos })

    },

    // Update - Method to update
    update: (req, res) => {

        const {
            mark,
            model,
            price,
            discount,
            description,
            camera,
            screen,
            memory,
            unlocking,
            image,

        } = req.body;

        const elId = req.params.id;
        const productoNuevo = [];

        products.map(data => {

            if (data.id == elId) {

                data.mark = mark,
                    data.model = model,
                    data.price = price,
                    data.description = description,
                    data.discount = discount,
                    data.camera = camera,
                    data.unlocking = unlocking,
                    data.screen = screen,
                    data.memory = memory,
                    data.image = image

            }
            productoNuevo.push(data);
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
        res.redirect("/");

    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        let idProducto = req.params.id;
        const productoEliminado = [];

        products.map(data => {
            if (data.id != idProducto) {

                productoEliminado.push(data);
            }
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(productoEliminado), 'utf-8');
        res.redirect("/");
    }
};

module.exports = productController;