module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usercategoryId: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    firstName: {
      type: dataTypes.STRING(100)
    },
    lastName: {
      type: dataTypes.STRING(100)
    },
    userName: {
      type: dataTypes.STRING(100)
    },
    email: {
      type: dataTypes.STRING(100)
    },
    password: {
      type: dataTypes.STRING(100)
    },
    avatar: {
      type: dataTypes.STRING(500)
    }
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: "product",
      through: "Trolley",
      foreignKey: "userId",
      otherKey: "productId",
      timetamps: false
    });
  }
  
  return User;
};