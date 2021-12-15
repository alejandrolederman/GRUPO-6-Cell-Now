const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

//ruta login
router.get('/login', userController.login);
// ruta del login al  home
router.post('/', userController.home);

router.get('/formularioRegistro', userController.registrer);
router.post('/formularioRegistro', userController.processRegistrer);


router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

