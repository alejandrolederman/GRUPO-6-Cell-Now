module.exports = (sequelize, DataTypes) => {

    let alias = "Productos";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mark:{
            type: DataTypes.INTEGER
        } ,
        model: {
            type: DataTypes.INTEGER
        } ,
        description: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        camera: {
            type: DataTypes.INTEGER
        },
        screen: {
            type: DataTypes.INTEGER
        },
        memory: {
            type: DataTypes.INTEGER
        },
        unlocking: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.INTEGER
        }

    };

    let config = {
        tableName: "Productos",
        timestamps: false
    }

    const product = sequelize.define(alias, cols, config);
    return product;
}