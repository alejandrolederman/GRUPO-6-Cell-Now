const express = require('express');
const router = express.Router();

const registrerController = require('../controller/registrerController');

router.get('/formulario-registro', registrerController.registrer);

module.exports = router;