const fs = require('fs');
const path = require('path');

const db = require("../database/models")

 const productsFilePath = path.join(__dirname, '../data/products.json');
 let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
///////////////////////////////////////////////////////////////
    //llama a la lista de productos de la base de datos
    productsList: (req, res) => {
        db.Product.findAll({
            include: [{association: "Mark"}]})
        .then(function (products){
        res.render('./products/productsList', {products:products});
        })
        .catch(function(err){
        console.log(err)
        })
  
    },
///////////////////////////////////////////////////////////////
    // detalle de producto
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id,{
        include: [{association: "Mark"}]})
        .then(function(unProduct){
            res.render('./products/detail', {unProduct: unProduct})  
        })
        .catch(function(err){
            console.log(err)
        }) 
      
  
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
    // crear producto
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
    // llama al producto para actualizar
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

///////////////////////////////////////////////////////////////
    // actualiza producto
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
            image: req.file ? req.file.filename : req.body.oldImagen,

        },
        {
            where: {
                id:req.params.id
            }
        });

        res.redirect('/')
    },

//////////////////////////////////////////////////////////////////////////////////////
    //llama el producto para la venta
    confirmarVenta: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association: "Mark"}]})
        .then(function(unProduct){
            res.render('./products/confirmVenta', {unProduct})  
        })
        .catch(function(err){
            console.log(err)
        })
        
        "use strict";
        const nodemailer = require("nodemailer");
        
        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
          // Generate test SMTP service account from ethereal.email
          // Only needed if you don't have a real mail account for testing
          let testAccount = await nodemailer.createTestAccount();
        
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "cellnowdh@gmail.com", // generated ethereal user
              pass: "Digital123456+", // generated ethereal password
            },
            // tls:{
            //     rejectUnauthorized: false
            // }
            
          });
          console.log(transporter)
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"cellnowDH@gmail.com"', // sender address
            to: 'alejandro.lederman@live.com.ar', // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>prueba </b>", // html body
          });
          console.log (info)
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);
        
    },
    
////////////////////////////////////////////////////////////////////////////////////////////
    // borra el producto vendido de la base de datos
    borrar: (req,res) =>{
        db.Product.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.render('./products/productoVendido'))
        .catch(error => console.log(error))

    },
//////////////////////////////////////////////////////////////////////////////////////
    // llama al producto para borrar
    unProductoDelete: (req,res)=>{
        db.Product.findByPk(req.params.id,{
            include: [{association: "Mark"}]})
        .then(function(unProduct){
            res.render('./products/productDelete', {unProduct})  
        })
        .catch(function(err){
            console.log(err)
        }) 
    },

////////////////////////////////////////////////////////////////////////////////////////////
    //borra el producto de la base de datos
    eliminar: (req,res) =>{
        db.Product.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/'))
        .catch(error => console.log(error))
    },

};

module.exports = productController;