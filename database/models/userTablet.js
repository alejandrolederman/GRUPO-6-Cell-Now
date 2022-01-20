module.exports = (sequelize, DataTypes) => {

    let alias = "Usuarios";
    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: DataTypes.INTEGER
        } ,
        lastName: {
            type: DataTypes.INTEGER
        } ,
        email: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.INTEGER
        },
        admin: {
            type: DataTypes.BOOLEAN
        },
        avatar:{
            type: DataTypes.INTEGER
        }

    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config);
    return user;
}