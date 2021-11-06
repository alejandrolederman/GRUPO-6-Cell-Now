const express = require("express");
const app = express();
const path = require("path");


const indexRouter = require('./router/indexRouter');
const trolleyRouter = require('./router/trolleyRouter');
const loginRouter = require('./router/loginRouter');
const registrerRouter = require('./router/registrerRouter')
const productRouter = require('./router/productRouter')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const port = process.env.PORT || 3000;

// Uso de las routes
app.use('/', indexRouter);
app.use('/trolley', trolleyRouter);
app.use('/login', loginRouter);
app.use('/registrer', registrerRouter)
app.use('/product',productRouter)

app.listen (port, ()=>{
    console.log ("el servidor inicio en el puerto: " + port)
});
