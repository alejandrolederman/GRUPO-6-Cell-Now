const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/login', userController.login);

router.get('/formulario-registro', userController.registrer);

router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

