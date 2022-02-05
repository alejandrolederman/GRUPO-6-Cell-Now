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
    price: {
      type: dataTypes.INTEGER,
    },
    discount: {
      type: dataTypes.STRING(280),
    },
    camera: {
      type: dataTypes.INTEGER,
    },
    modelId: {
      type: dataTypes.INTEGER,
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
  };
  // let config = {
  //   tableName: "products",
  //   timestamps: false,
  // };

  const Product = sequelize.define(alias, cols, config);


  Product.associate = function (models) {
    Product.belongsToMany(models.users, {
      as: "users",
      through: "Trolley",
      foreignKey: "productId",
      otherKey: "UserId",
      timetamps: false
    });
  
  
    Product.belongsTo(models.mark, {
      as: "Mark",
      foreignKey: "MarkId"

    });
  
 
    Product.belongsTo(models.Model, {
      as: "Modelo",
      foreignKey: "Model_id"

    })
  };
  return Product;
};