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
    markId: {
      type: dataTypes.STRING(100),
    }
  };
  let config = {
    tableName: "models",
    timestamps: false,
  };
  const Model = sequelize.define(alias, cols, config);
  Model.associate = function (models) {
    Model.belongsTo(models.Mark, {
      as: "Mark",
      foreignKey: "markId"

    })

  }

  

  return Model;
};