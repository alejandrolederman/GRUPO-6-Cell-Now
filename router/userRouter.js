const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');

const validations = require('../middlewares/validacionRegistro');



//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./public/img/avatars');
    },
    filename: (req, file, cb) => {
        
        let fileName = 'img_user' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const uploadFile = multer({storage});
const userController = require('../controller/userController');
// listado de usuarios
router.get('/usersList', userController.usersList);

// detalle de ususario
router.get('/usersDetail/:id', userController.usersDetail);

//ruta login
router.get('/login', userController.login);

// ruta del login al  home
router.post('/', userController.home);

//formulario del registro
router.get('/formularioRegistro', userController.registrer);

//procesar el registro
router.post('/formularioRegistro',validations, userController.storeUsers);

// router.post('/formularioRegistro',uploadFile.single('avatar'),validations, userController.processRegistrer);


router.get('/selecBuyOrSell', userController.selecBuyOrSell)

module.exports = router;

