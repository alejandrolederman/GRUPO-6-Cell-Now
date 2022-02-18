
const path = require('path');
const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos

const UserAPIController = {
    list: (req, res) => {
        db.User.findAll({
            include: [{association: "UserCat"}]})
        .then(users => {
            console.log(users)
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: '/api/users'
                },
                data: users.map(user=>{
                    return {
                        id: user.id,
                        firstName: user.firstName,
                        lastname: user.lastName,
                        email: user.email,
                        userCategory: user.UserCat.name
                    }
                })
            }
                res.json(respuesta);
            })
    },
    
    detail: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = UserAPIController;
