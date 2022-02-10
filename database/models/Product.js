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
      as: "Mark",
      foreignKey: "markId"

    });
    };

  return Product;
};