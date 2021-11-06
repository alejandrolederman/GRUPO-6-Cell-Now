const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require('./router/indexRouter');
const trolleyRouter = require('./router/trolleyRouter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const port = process.env.PORT || 3000;

// Uso de las routes
app.use('/', indexRouter);
app.use('/trolley', trolleyRouter);

app.listen (port, ()=>{
    console.log ("el servidor inicio en el puerto: " + port)
});







 app.get("/views/comprar.html", (req, res)=>{
     res.sendFile(path.resolve(__dirname, "./views/comprar.html"))
 }) ;

 app.get("/views/login.html", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
}) ;

app.get("/views/formulario-registro.html", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/formulario-registro.html"))
}) ;