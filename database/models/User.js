module.exports = (sequelize, dataTypes) => {
  let alias = "users";
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
    user_category_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      allowNull: true

    },
    avatar: {
      type: dataTypes.STRING(100)
    }

  };
  let config = {
    tableName: "users",
    timestamps: false,
  };

  const users = sequelize.define(alias, cols, config);

  users.associate = function (models) {
    users.belongsToMany(models.Producto, {
      as: "Producto",
      through: "Trolley",
      foreignKey: "User_id",
      otherKey: "product_id",
      timetamps: false
    });
  }
  
  return users;
};