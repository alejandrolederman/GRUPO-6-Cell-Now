const express = require('express');
const router = express.Router();

const trolleyController = require('../controller/trolleyController');

router.get('/carritoDeCompras', trolleyController.trolley);

module.exports = router;