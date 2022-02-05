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
    }
  };

  const Mark = sequelize.define(alias, cols);
  Mark.associate = function (models) {
    Mark.hasMany(models.Model, {
      as: "model",
      foreignKey: "markId"
    });
  }


  return Mark;
};