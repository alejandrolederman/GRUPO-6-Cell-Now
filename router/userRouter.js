const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');

const validationRecord = require('../middlewares/validationRecord');
const validationLogin = require("../middlewares/validatorLogin")
const uploadFile = require ("../middlewares/multerStorange")
const userController = require('../controller/userController');
const guestMiddlewares = require("../middlewares/guestMiddlewares")
const authMiddleware = require('../middlewares/authMiddleware')

// listado de usuarios
router.get('/usersList', userController.usersList);

// detalle de ususario
router.get('/usersDetail/:id', userController.usersDetail);

//ruta login y validacion
router.get('/login',guestMiddlewares, userController.login);
router.post('/login', validationLogin,userController.loginProcess);

router.get('/userProfile',authMiddleware, userController.profile);
router.get('/logout', userController.logout);


// ruta del login al  home
router.post('/', userController.home);

//formulario del registro
// router.get('/formularioRegistro',guestMiddlewares, userController.registrer);
//procesar el registro
// router.post('/formularioRegistro', uploadFile.single('avatar'), userController.processRegistrer);

router.get('/selecBuyOrSell', userController.selecBuyOrSell)

//formulario del registro base de datos
router.get('/formularioRegistro', userController.crear);
//procesar el registro base de datos
router.post('/formularioRegistro', uploadFile.single('avatar'),validationRecord, userController.guardar);

module.exports = router;

