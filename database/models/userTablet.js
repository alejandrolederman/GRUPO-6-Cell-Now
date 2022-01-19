module.exports = (sequelize, DataTypes) => {

    let alias = "Usuarios";
    let cols = {

    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config)
}