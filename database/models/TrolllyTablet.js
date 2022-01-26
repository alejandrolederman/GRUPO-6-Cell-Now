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
  
    Trolly.associate = function (models) {
      Trolly.belongsToMany(models.ProductTablet, {
          as: "product",
          foreignKey: "cart_id",
          otherKey: "product_id",
          timestamps: false,
        });
    
        trolly.belongsTo(models.UserTablet, {
          as: "users",
          foreignKey: "user_id",
        });
      
  };
  
    return trolly;
  };