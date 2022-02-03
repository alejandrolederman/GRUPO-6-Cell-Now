module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mark_id: {
      type: dataTypes.STRING(200),
    },
    price: {
      type: dataTypes.STRING(280),
    },
    discount: {
      type: dataTypes.STRING(280),
    },
    camera: {
      type: dataTypes.STRING(280),
    },
    model_id: {
      type: dataTypes.STRING(280),
    },
    screen: {
      type: dataTypes.STRING(280),
    },
    unlocking: {
      type: dataTypes.STRING(280),
    },
    image: {
      type: dataTypes.STRING(280),
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Producto = sequelize.define(alias, cols, config);


  Producto.associate = function (models) {
    Producto.belongsToMany(models.users, {
      as: "users",
      through: "Trolley",
      foreignKey: "product_id",
      otherKey: "User_id",
      timetamps: false
    });
  
  
    Producto.belongsTo(models.mark, {
      as: "Marca",
      foreignKey: "Mark_id"

    });
  
 
    Producto.belongsTo(models.Model, {
      as: "Modelo",
      foreignKey: "Model_id"

    })
  };
  return Producto;
};