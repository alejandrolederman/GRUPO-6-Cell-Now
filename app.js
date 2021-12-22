const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const path = require("path");
const express = require("express");
const app = express();
const logger = require('morgan');
const methodOverride =  require('method-override');
let session = require("express-session")


const indexRouter = require('./router/indexRouter');
const trolleyRouter = require('./router/trolleyRouter');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const { error } = require('console');

app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({secret:"secreto",resave: false,saveUninitialized: false}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const port = process.env.PORT || 3002;

// Uso de las routes
app.use('/', indexRouter);
app.use('/trolley', trolleyRouter);
app.use('/user', userRouter);
app.use('/products',productRouter)

//ruta error 404 
 app.use((req, res,next)=>{
     res.status(404).render("./main/notFound"),
     console.log (404);
});



app.listen (port, ()=>{
    console.log ("el servidor inicio en el puerto: " + port)
});
