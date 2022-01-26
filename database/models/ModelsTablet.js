module.exports = (sequelize, dataTypes) => {
    let alias = "Models";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      model: {
        type: dataTypes.STRING(100),
      },
      mark: {
        type: dataTypes.STRING(100),
      }
    };
    let config = {
      tableName: "Models",
      timestamps: false,
    };
  
    const model = sequelize.define(alias, cols, config);
  
    
  
    return model;
  };