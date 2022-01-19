module.exports = (sequelize, DataTypes) => {

    let alias = "Usuarios";
    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.INTEGER
        } ,
        apellido: {
            type: DataTypes.INTEGER
        } ,
        mail: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.INTEGER
        },
        admin: {
            type: DataTypes.BOOLEAN
        }

    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config);
    return user;
}