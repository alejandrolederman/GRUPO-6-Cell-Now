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

totalMarks: async (req, res) => {

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

let productos = await db.Product.findAll({
    include: [{association: "Mark"}]})

    console.log(productos)
    let productosTotales = [];
    
       for (let i = 0; i < productos.length; i++){
        let marca = productos[i].Mark.dataValues.name;
        let contador = 0;
        
         contador = contador ++
                
        productosTotales.push({marca, contador})

   }

    
    let respuesta = {
        meta: {
            status : 200,
            total: productosTotales.length,
            url: '/data/totalMarks'
        },
        data: productosTotales
    }
        res.json(respuesta);
    
}
}

module.exports = marksAPIController;