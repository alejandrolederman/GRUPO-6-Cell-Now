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
},

totalMarks: (req, res) => {

    let Samsung = 0;
    let iPhone = 0;
    let LG = 0;
    let Huawei = 0;
    let OnePlus = 0;
    let Xiaomi = 0;

    function switchMark(mark){
        switch (mark) {
            case "Samsung":
                return Samsung++;
            case "iPhone":
                return iPhone++;
            case "Huawei":
                return Huawei++;
            case "Xiaomi":
                return Xiaomi++;
            case "LG":
                return LG++;
            case "OnePlus":
                return OnePlus++;
        }
    }
    db.Product.findAll({
        include: [{association: "Mark"}]})
    .then(products => {
        console.log(products)
        let respuesta = {
            meta: {
                status : 200,
                total: products.length,
                url: '/data/totalMarks'
            },
            data: products.map(product=>{
            switchMark(product.Mark.name)
            })
        }
            res.json({Samsung, iPhone, Huawei, Xiaomi, LG, OnePlus});
        })
}
}

module.exports = marksAPIController;