module.exports = (sequelize, dataTypes) => {
    let alias = "Sale";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      markId: {
        type: dataTypes.INTEGER,
      },
      model: {
        type: dataTypes.STRING(50),
      },
      price: {
        type: dataTypes.INTEGER(20),
      },
      discount: {
        type: dataTypes.INTEGER(10),
      },
      camera: {
        type: dataTypes.STRING(50),
      },
      screen: {
        type: dataTypes.STRING(50),
      },
      memory:{
        type: dataTypes.STRING(20),
      },
      unlocking: {
        type: dataTypes.STRING(50),
      },
      description: {
        type: dataTypes.STRING(500),
      },
      image: {
        type: dataTypes.STRING(50),
      },
      
    };
  
    let config = {
      tableName: "sales",
      timestamps: false,
    };
  
    const Sale = sequelize.define(alias, cols, config);

    // Sale.associate = function (models) {
    //   Sale.belongsTo(models.Mark, {
    //     as: "Mark",
    //     foreignKey: "markId"
  
    //   });
    //   };

    return Sale;
  };
  