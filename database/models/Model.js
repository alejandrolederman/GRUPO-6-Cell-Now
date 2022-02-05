module.exports = (sequelize, dataTypes) => {
  let alias = "model";
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
  let config = {
    tableName: "models",
    timestamps: false,
  };

  const model = sequelize.define(alias, cols, config);
  model.associate = function (models) {
    model.belongsTo(models.mark, {
      as: "Mark",
      foreignKey: "MarkId"

    })
  }


  return model;
};