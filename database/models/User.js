module.exports = (sequelize, dataTypes) => {
  let alias = "Usuario";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING(100)
    },
    last_name: {
      type: dataTypes.STRING(100)
    },
    user_name: {
      type: dataTypes.STRING(100)
    },
    email: {
      type: dataTypes.STRING(100)
    },
    password: {
      type: dataTypes.STRING(100)
    },
    category: {
      type: dataTypes.INTEGER
    },
    avatar: {
      type: dataTypes.STRING(100)
    }

  };
  let config = {
    tableName: "users",
    timestamps: false,
  };

  const Usuario = sequelize.define(alias, cols, config);

  // Usuario.associate = function (models) {
  //   Usuario.belongsToMeny(models.ProductTablet, {
  //     as: "Producto",
  //     through: "Trolley",
  //     foreignKey: "User_id",
  //     otherKey: "product_id",
  //     timetamps: false
  //   });

  

  return Usuario;
};