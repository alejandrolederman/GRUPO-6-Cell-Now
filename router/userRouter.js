const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');

const validationRecord = require('../middlewares/validationRecord');
const validationLogin = require("../middlewares/validatorLogin")
const storage = require("../middlewares/multerStorange")
const uploadFile = multer({storage});
const userController = require('../controller/userController');

// listado de usuarios
router.get('/usersList', userController.usersList);

// detalle de ususario
router.get('/usersDetail/:id', userController.usersDetail);

//ruta login y validacion
router.get('/login', userController.login);
router.post('/login', validationLogin,userController.loginProcess);

// ruta del login al  home
router.post('/', userController.home);

//formulario del registro
router.get('/formularioRegistro', userController.registrer);
//procesar el registro
router.post('/formularioRegistro', uploadFile.single('avatar'),validationRecord, userController.processRegistrer);


router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

