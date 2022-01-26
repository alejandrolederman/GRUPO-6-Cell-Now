module.exports = (sequelize, dataTypes) => {
    let alias = "Marks";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(100),
      }
    };
    let config = {
      tableName: "Marks",
      timestamps: false,
    };
  
    const mark = sequelize.define(alias, cols, config);
  
    
  
    return mark;
  };