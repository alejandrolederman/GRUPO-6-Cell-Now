module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    markId: {
      
      type: dataTypes.INTEGER,
    },
    modelId: {
      type: dataTypes.INTEGER,
    },
    price: {
      type: dataTypes.STRING(280),
    },
    
    camera: {
      type: dataTypes.STRING(280),
    },
    
    screen: {
      type: dataTypes.STRING(280),
    },
    unlocking: {
      type: dataTypes.STRING(280),
    },
    description: {
      type: dataTypes.STRING(500),
    },
    image: {
      type: dataTypes.STRING(280),
    },
    discount: {
      type: dataTypes.STRING(280),
    },
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);


  Product.associate = function (models) {
    Product.belongsToMany(models.User, {
      as: "users",
      through: "Trolley",
      foreignKey: "productId",
      otherKey: "userId",
      timetamps: false
    });
  
  
    Product.belongsTo(models.Mark, {
      as: "mark",
      foreignKey: "markId"

    });
  
 
    Product.belongsTo(models.Model, {
      as: "model",
      foreignKey: "modelId"

    })
  };
  return Product;
};