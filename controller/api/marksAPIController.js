const db = require("../../database/models");

const marksAPIController ={
markList: (req, res) => {
    db.Mark.findAll()
    .then(marks => {
        console.log(marks)
        let respuesta = {
            meta: {
                status : 200,
                total: marks.length,
                url: '/data/mark'
            },
            data: marks.map(mark=>{
                return {
                    id: mark.id,
                    name: mark.name
                }
            })
        }
            res.json(respuesta);
        })
}
}

module.exports = marksAPIController;