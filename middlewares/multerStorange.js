//multer
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./public/img/avatars');
    },
    filename: (req, file, cb) => {
        
        let fileName = 'img_user' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})

module.exports = storage;