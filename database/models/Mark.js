module.exports = (sequelize, dataTypes) => {
  let alias = "mark";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
    }
  };
  let config = {
    tableName: "Marks",
    timestamps: false,
  };

  const Marca = sequelize.define(alias, cols, config);
  Marca.associate = function (models) {
    Marca.hasMany(models.Model, {
      as: "modelos",
      foreignKey: "Mark_id"
    });
  }


  return Marca;
};