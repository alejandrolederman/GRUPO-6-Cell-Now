const fs = require('fs');

const User = {

    filename: './data/users.json',

    //encontrar a todos los usuarios
    findAllUsers: function () {
        return this.getData();
    },

    //se trae a todos los usuarios
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'))
    },

    //metodo para generar un ID
    generateId: function () {
        let allUsers = this.findAllUsers();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    
    //buscar usuario por ID
    findByPk: function (id) {
        //aca estan todos los usuarios
        let allUsers = this.findAllUsers();
        //el usuario que encontramos con el metodo  find
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
    },

    //buscar usuario por cualquier parametro
    findByField: function (field, text) {
        //aca estan todos los usuarios
        let allUsers = this.findAllUsers();
        //el usuario que encontramos con el metodo  find
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    //crear usuario
    create: function (userData) {
        let allUsers = this.findAllUsers();
        let newData = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newData);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ''))
        return newData;
    },

    //borar usuario
    delete: function (id){
        let allUsers = this.findAllUsers();
        let finalUsers = allUsers.filter(oneUser=> oneUser.id!= id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ''))
        return true
    }
}
 module.exports = User;
// console.log(User.create({ first_name: 'juan', email:'ale@ale.com'}))
