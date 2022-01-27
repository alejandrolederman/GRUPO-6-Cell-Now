module.exports = (sequelize, dataTypes) => {
    let alias ="Carrito";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: dataTypes.STRING(100),
      },
      prudct_id: {
        type: dataTypes.STRING(100),
      },
      amount: {
        type: dataTypes.NUMBER(100),
      }
    };
    let config = {
      tableName: "Trolly",
      timestamps: false,
    };
  
    const Carrito = sequelize.define(alias, cols, config);
  


  
    return trolly;
  };