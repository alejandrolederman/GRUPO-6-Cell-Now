const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

//ruta login
router.get('/login', userController.login);
// ruta del login al  home
router.post('/', userController.home);

router.get('/formulario-registro', userController.registrer);

router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

