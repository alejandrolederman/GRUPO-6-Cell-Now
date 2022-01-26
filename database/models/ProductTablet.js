module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      marks: {
        type: dataTypes.STRING(61),
      },
      price: {
        type: dataTypes.INTEGER,
      },
      discount: {
        type: dataTypes.INTEGER,
      },
      camera: {
        type: dataTypes.INTEGER,
      },
      model: {
        type: dataTypes.STRING(280),
      },
      screen: {
        type: dataTypes.DATE,
      },
      unlocking: {
        type: dataTypes.DATE,
      },
      image: {
        type: dataTypes.DATE,
      },
    };
    let config = {
      tableName: "products",
      timestamps: false,
    };
  
    const Product = sequelize.define(alias, cols, config);