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
  let config = {
    tableName: "Models",
    timestamps: false,
  };

  const Modelo = sequelize.define(alias, cols, config);
  Modelo.associate = function (models) {
    Modelo.belongsTo(models.mark, {
      as: "Marca",
      foreignKey: "Mark_id"

    })
  }


  return Modelo;
};