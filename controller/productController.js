const fs = require('fs');
const path = require('path');

const db = require("../database/models")

 const productsFilePath = path.join(__dirname, '../data/products.json');
 let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
///////////////////////////////////////////////////////////////

    // Root - Show all products
    productsList: (req, res) => {
        db.Product.findAll()
        .then(function (products){
        res.render('./products/productsList', {products:products});
    })
    .catch(function(err){
        console.log(err)
    })
       
        // res.render('./products/productsList', {
        //     products
        // });
    },
///////////////////////////////////////////////////////////////

    // Detail - Detail from one product
    productDetail: (req, res) => {
      
        db.Product.findByPk(req.params.id)
        .then(function(unProduct){
            res.render('./products/detail', {unProduct: unProduct})  
        })
        .catch(function(err){
            console.log(err)
        }) 
      
      
      
      
        // let elId = req.params.id;
        // let productos = products.find(unProducto => {
        //     if (unProducto.id == elId) {
        //         return unProducto;
        //     }
        // });
        // res.render('./products/detail', {
        //     productos,
        //     products
        // })
    },
////////////////////////////////////////////////////////////////////
    // Create - Form to create
    crear: (req, res) => {
        db.Mark.findAll()
        .then(function(Mark){
            res.render("./products/productsForm", {Mark});
        })
        .catch(function(err){
            console.log(err)
        })  

        // db.Model.findAll()
        // .then(function(model){
        //     res.render("./products/productsForm", {model});
        // })
        // .catch(function(err){
        //     console.log(err)
        // }) 
    },
//////////////////////////////////////////////////////////////
    // Create -  Method to store
    
            store:function (req, res) {
            
        db.Product.create({

            markId: req.body.MarkId,
            modelId: req.body.ModelId,
            price: req.body.price,
            description: req.body.description,
            camera: req.body.camera,
            screen: req.body.screen,
            memory: req.body.memory,
            unlocking: req.body.unlocking,
            image: req.body.image,
            discount: req.body.discount
        
        })
        res.redirect("/");
    },

//////////////////////////////////////////////////////////////////////////////


    // Update - Form to edit
    edit: (req, res) => {

            db.Product.findByPk(req.params.id)
            .then(function(unProduct){
                res.render('./products/productEdit', {unProduct})  
            })
            .catch(function(err){
                console.log(err)
            }) 
        },       

        // let elId = req.params.id;
        // let productos = products.find(unProducto => {
        //     if (unProducto.id == elId) {
        //         return unProducto;
        //     }
        // });
        // res.render('./products/productEdit', { productos })

    

///////////////////////////////////////////////////////////////


    // Update - Method to update
    update: (req, res) => {

        db.Product.update({

            markId: req.body.MarkId,
            modelId: req.body.ModelId,
            price: req.body.price,
            description: req.body.description,
            camera: req.body.camera,
            screen: req.body.screen,
            memory: req.body.memory,
            unlocking: req.body.unlocking,
            image: req.body.image,
            discount: req.body.discount
        
        },
    //     {where: 
    //     id : req.params.id
    // }
        )

        // const {
        //     MarkId,
        //     ModelId,
        //     price,
        //     discount,
        //     description,
        //     camera,
        //     screen,
        //     memory,
        //     unlocking,
        //     image,

        // } = req.body;

        // const elId = req.params.id;
        // const productoNuevo = [];

        // products.map(data => {

        //     if (data.id == elId) {

        //             data.mark = mark,
        //             data.model = model,
        //             data.price = price,
        //             data.description = description,
        //             data.discount = discount,
        //             data.camera = camera,
        //             data.unlocking = unlocking,
        //             data.screen = screen,
        //             data.memory = memory,
        //             data.image = image

        //     }
        //     productoNuevo.push(data);
        // });

        // fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
        // res.redirect("/");

    },

//////////////////////////////////////////////////////////////////////////////////////
 
    confirmarVenta: (req,res)=>{

        db.Product.findByPk(req.params.id)
        .then(function(unProduct){
            res.render('./products/confirmVenta', {unProduct})  
        })
        .catch(function(err){
            console.log(err)
        }) 
    },
    
////////////////////////////////////////////////////////////////////////////////////////////

    // Delete - Delete one product from DB
    borrar: (req,res) =>{
        db.Product.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.render('./products/productoVendido'))
        .catch(error => console.log(error))
    },


    // destroy: (req, res) => {
    //     db.Product.findByPk(req.params.id)
    //     const productoEliminado = [];

    //     products.map(data => {
    //         if (data.id != idProducto) {

    //             productoEliminado.push(data);
    //         }
    //     })

    //     fs.writeFileSync(productsFilePath, JSON.stringify(productoEliminado), 'utf-8');
    //     res.redirect("/");
    // }

/////////////////////////////////////////////////////////////////////////////////////

// vendido: (req, res) => {

//     res.redirect('./products/productoVendido')
// }

/////////////////////////////////////////////////////////////////////////////////////

};

module.exports = productController;