const express = require("express");
const app = express();
const path = require("path");

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

app.listen (3000, ()=>{
    console.log ("el servidor inicio")
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
}) ;