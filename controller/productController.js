const fs = require('fs');
const path = require('path');

const db = require("../database/models")

 const productsFilePath = path.join(__dirname, '../data/products.json');
 let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
///////////////////////////////////////////////////////////////
    // Root - Show all products
    productsList: (req, res) => {
        db.Product.findAll({
            include: [{association: "Mark"}]})
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
      
        db.Product.findByPk(req.params.id,{
        include: [{association: "Mark"}]})
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
        .then(function(mark){
            res.render("./products/productsForm", {mark:mark});
        })
        .catch(function(err){
            console.log(err)
        })    
    },
//////////////////////////////////////////////////////////////
    // Create -  Method to store
    store:function (req, res) {            
        db.Product.create({
            markId: req.body.markId,
            model: req.body.model,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            camera: req.body.camera,
            screen: req.body.screen,
            memory: req.body.memory,
            unlocking: req.body.unlocking,
            image: req.file.filename
            
        })
        res.redirect("/");
    },

//////////////////////////////////////////////////////////////////////////////
    // Update - Form to edit
    edit: (req, res) => {
            let pedidoProducto = db.Product.findByPk(req.params.id)
            let pedidoMarcas = db.Mark.findAll() 

            Promise.all ([pedidoProducto, pedidoMarcas])
            .then(function([unProduct, mark]){
                res.render('./products/productEdit', {unProduct:unProduct, mark:mark})  
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
    actualizar: (req, res) => {

        db.Product.update({
           markId: req.body.markId,
            model: req.body.model,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            camera: req.body.camera,
            screen: req.body.screen,
            memory: req.body.memory,
            unlocking: req.body.unlocking,
            image: req.file.filename
        
        },
        {
            where: {
                id:req.params.id
            }
        });

        res.redirect('/')
    },

//////////////////////////////////////////////////////////////////////////////////////
 
    confirmarVenta: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association: "Mark"}]})
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

};

module.exports = productController;