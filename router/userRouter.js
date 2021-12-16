const express = require('express');
const router = express.Router();
const multer = require("multer");

const userController = require('../controller/userController');

//ruta login
router.get('/login', userController.login);
// ruta del login al  home
router.post('/', userController.home);
//formulario del registro
router.get('/formularioRegistro', userController.registrer);
//procesar el registro
router.post('/formularioRegistro', userController.processRegistrer);


router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

