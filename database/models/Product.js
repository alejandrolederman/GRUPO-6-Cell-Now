module.exports = (sequelize, dataTypes) => {
  let alias = "product";
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
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const product = sequelize.define(alias, cols, config);


  product.associate = function (models) {
    product.belongsToMany(models.users, {
      as: "users",
      through: "Trolley",
      foreignKey: "productId",
      otherKey: "UserId",
      timetamps: false
    });
  
  
    product.belongsTo(models.mark, {
      as: "mark",
      foreignKey: "MarkId"

    });
  
 
    product.belongsTo(models.model, {
      as: "Modelo",
      foreignKey: "Model_id"

    })
  };
  return product;
};