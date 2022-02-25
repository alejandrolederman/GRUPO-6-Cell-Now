const express = require('express');
const router = express.Router();
const marksAPIController = require('../../controller/api/marksAPIController');

//Rutas
//Listado de clientes | /api/clientes
router.get('/', marksAPIController.markList);

router.get('/totalMarks', marksAPIController.totalMarks);

module.exports = router;