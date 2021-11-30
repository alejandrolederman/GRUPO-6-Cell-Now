const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {


    productDetail= (req, res) => {
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
    productsList= (req, res) => {
        res.render('./products/productsList', {
            products
        });
    },

    // Create - Form to create
    create= (req, res) => {
        res.render("productsForm");
    },

    // Create -  Method to store
    store= (req, res) => {
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

                id = cantidadProductos,
                marca= marca,
                name= name,
                description= description,
                price= price,
                discount= discount,
                camara= camara,
                desbloqueo= desbloqueo,
                pantalla= pantalla,
                memoria= memoria,
                image= image,
                type= type
            }
            products.push(data);

		fs.writeFileSync(productsFilePath,JSON.stringify(products),'utf-8');
res.redirect("/");
      
    },

    // Update - Form to edit
	edit= (req, res) => {

		let elId = req.params.id;
	 	let productos = products.find(unProducto => {
	 		if (unProducto.id == elId) {
	 			return unProducto;
	 		}
	 	 });
	 	res.render('./products/productEdit', { productos })
	
	 },

	// Update - Method to update
	update= (req, res) => {

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

		const elId = req.params.id;
		const productoNuevo = [];

	products.map(data=> {

		if(data.id == elId){

			   data.marca= marca,
               data.name= name,
               data.description= description,
               data.price= price,
               data.discount= discount,
               data.camara= camara,
               data.desbloqueo= desbloqueo,
               data.pantalla= pantalla,
               data.memoria= memoria,
               data.image= image,
               data.type= type
		}
		productoNuevo.push(data);
	});

		fs.writeFileSync(productsFilePath,JSON.stringify(products),'utf-8');
        res.redirect("/");

	},

    	// Delete - Delete one product from DB
	destroy= (req, res) => {
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