module.exports = (sequelize, dataTypes) => {
  let alias = "Modelo";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
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
    Modelo.belongsTo(models.Marca, {
      as: "Marca",
      foreignKey: "Mark_id"

    })
  }


  return Modelo;
};