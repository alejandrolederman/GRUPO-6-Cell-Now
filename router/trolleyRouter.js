const express = require('express');
const router = express.Router();

const trolleyController = require('../controller/trolleyController');

router.get('/carrito-de-compras', trolleyController.trolley);

module.exports = router;