module.exports = (sequelize, dataTypes) => {
  let alias = "Model";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
    },
    mark: {
      type: dataTypes.STRING(100),
    }
  };
  const Model = sequelize.define(alias, cols);
  Model.associate = function (models) {
    Model.belongsTo(models.Mark, {
      as: "Mark",
      foreignKey: "markId"

    })

    Model.belongsTo(models.Product, {
      as: "products",
      foreignKey: "productId"

    })
  }

  

  return Model;
};