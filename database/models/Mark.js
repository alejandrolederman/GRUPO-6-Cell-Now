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

  const mark = sequelize.define(alias, cols, config);
  mark.associate = function (models) {
    mark.hasMany(models.model, {
      as: "model",
      foreignKey: "markId"
    });
  }


  return mark;
};