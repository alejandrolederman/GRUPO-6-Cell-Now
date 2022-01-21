module.exports = (sequelize, dataTypes) => {

    let alias = "Usuarios";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: dataTypes.INTEGER
        } ,
        lastName: {
            type: dataTypes.INTEGER
        } ,
        email: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.INTEGER
        },
        admin: {
            type: dataTypes.BOOLEAN
        },
        avatar:{
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config);
    return user;
}