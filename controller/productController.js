const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    create: (req, res) => {
        res.render("./products/productsForm");
    },

    // Create -  Method to store
    store: (req, res) => {
        const {mark, model, price, camera, description,
            unlocking, screen, memory, image } = req.body;

        let cantidadProductos = 0;
        for (let i = 0; i < products.length; i++) {

            cantidadProductos = cantidadProductos + 1;
        };

        const data = {

                id: cantidadProductos,
                mark: mark,
                model: model,
                description: description,
                price: price,
                camera: camera,
                unlocking: unlocking,
                screen: screen,
                memory: memory,
                image: image,
            };
            products.push(data);

		fs.writeFileSync(productsFilePath,JSON.stringify(products),'utf-8');
res.redirect("/");
      
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
            camera,
            description,
            unlocking,
            screen,
            memory,
            image,
            type
        } = req.body;

		const elId = req.params.id;
		const productoNuevo = [];

	products.map(data=> {

		if(data.id == elId){

			   data.mark= mark,
               data.model= model,
               data.description= description,
               data.price= price,
               data.discount= discount,
               data.camera= camera,
               data.unlocking= unlocking,
               data.screen= screen,
               data.memory= memory,
               data.image= image,
               data.type= type
		}
		productoNuevo.push(data);
	});

		fs.writeFileSync(productsFilePath,JSON.stringify(products),'utf-8');
        res.redirect("/");

	},

    	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let idProducto = req.params.id;
		const productoEliminado = [];
		
		products.map(data=> {
			if(data.id != idProducto){

				productoEliminado.push(data);
			}	
		})
		
		fs.writeFileSync(productsFilePath,JSON.stringify(productoEliminado),'utf-8');
		res.redirect("/");
	}
};

module.exports = productController;