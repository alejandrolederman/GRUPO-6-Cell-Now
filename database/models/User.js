module.exports = (sequelize, dataTypes) => {
  let alias = "users";
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
    userCategoryId: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      

    },
    avatar: {
      type: dataTypes.STRING(100)
    }

  };
  let config = {
    tableName: "users",
    timestamps: false,
  };

  const users= sequelize.define(alias, cols, config);

  users.associate = function (models) {
    users.belongsToMany(models.product, {
      as: "product",
      through: "Trolley",
      foreignKey: "User_id",
      otherKey: "product_id",
      timetamps: false
    });
  }
  
  return users;
};