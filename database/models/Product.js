module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mark_id: {
      type: dataTypes.STRING(61),
    },
    price: {
      type: dataTypes.INTEGER,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    camera: {
      type: dataTypes.INTEGER,
    },
    model_id: {
      type: dataTypes.STRING(280),
    },
    screen: {
      type: dataTypes.DATE,
    },
    unlocking: {
      type: dataTypes.DATE,
    },
    image: {
      type: dataTypes.DATE,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Producto = sequelize.define(alias, cols, config);


  Producto.associate = function (models) {
    Producto.belongsToMany(models.Usuario, {
      as: "Usuario",
      through: "Trolley",
      foreignKey: "product_id",
      otherKey: "User_id",
      timetamps: false
    });
  
  
    Producto.belongsTo(models.Marca, {
      as: "Marca",
      foreignKey: "Mark_id"

    });
  
 
    Producto.belongsTo(models.Modelo, {
      as: "Modelo",
      foreignKey: "Model_id"

    })
  };
  return Producto;
};