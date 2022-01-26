module.exports = (sequelize, dataTypes) => {
    let alias ="Trollys";
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
      tableName: "Trollys",
      timestamps: false,
    };
  
    const trolly = sequelize.define(alias, cols, config);
  
    
  
    return trolly;
  };