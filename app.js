const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const path = require("path");
const express = require("express");
const app = express();
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require("express-session");

const {connect} = require('./database/config/database.config')
const indexRouter = require('./router/indexRouter');
const trolleyRouter = require('./router/trolleyRouter');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const usersapiRouter = require ("./router/Api/users")
const productapiRouter = require ("./router/Api/products")
const markapiRouter = require ("./router/Api/marks")

// const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); 
const { error } = require('console');

// checkConnet()

app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({secret:"secreto",resave: false,saveUninitialized: false}));

// app.use(userLoggedMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const PORT = process.env.PORT || 3002;

app.get('/', (req, res)  =>{
    res.send("hola como estas ")
}
);

// Uso de las routes
// app.use('/', indexRouter);
// app.use('/trolley', trolleyRouter);
// app.use('/views/user', userRouter);
// app.use('/views/products',productRouter);
// app.use('/data/user', usersapiRouter);
// app.use('/data/product', productapiRouter);
// app.use('/data/mark', markapiRouter);

//ruta error 404 
 app.use((req, res,next)=>{
     res.status(404).render("./main/notFound"),
     console.log (404);
});



app.listen (PORT, ()=>{
    console.log (`el servidor inicio en: localhost:${PORT}`);
});
