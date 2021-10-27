const express = require("express");
const app = express();
const path = require("path");

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const port = process.env.PORT || 3000;

app.listen (port, ()=>{
    console.log ("el servidor inicio")
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/views/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
 });


app.get("/views/comprar", (req, res)=>{
     res.sendFile(path.resolve(__dirname, "./views/comprar.html"))
 });

app.get('/views/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/formulario-registro.html'))
});

app.get("/views/carrito-de-compras", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/carrito-de-compras.html"))
});
