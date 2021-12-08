const fs = require('fs');
const User = {

    fileName: './data/users.json',
    //se trae a todos los usuarios
    data: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    generateId: function(){
var allUsers= this.findAllUser();
var lastUser= allUsers.pop();
if(lastUser){
return lastUser.id + 1;
}
return 1;
    },
    //encontrar a todos los usuarios
    finAllUsers: function () {
        return this.data();
    },

    //buscar usuario por ID
    findByPk: function (id) {
        //aca estan todos los usuarios
        var allUsers = this.finAllUsers();
        //el usuario que encontramos con el metodo  find
        var userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
    },

    //crear usuario
    create: function (userData) {
        var allUsers = this.finAllUsers();
        var newUser ={
            id: this.generateId(),
...userData
        }
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ''))
    }
}
console.log(User.findByPk(100))