module.exports = (sequelize, dataTypes) => {

  let alias = "Mark";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
    },
  };

  let config = {
    tableName: "marks",
    timestamps: false,
  };

  const Mark = sequelize.define(alias, cols, config);
  Mark.associate = function (models) {
    Mark.hasMany(models.Product, {
      as: "products",
      foreignKey: "markId"
    });
  }

  return Mark;
};