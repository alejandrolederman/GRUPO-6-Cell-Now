module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    usercategoryId: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      

    },
    avatar: {
      type: dataTypes.STRING(100)
    }

  };
  const User = sequelize.define(alias, cols);

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