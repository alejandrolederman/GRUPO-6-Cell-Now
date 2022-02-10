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
  // let config = {
  //   tableName: "Marks",
  //   timestamps: false,
  // };

  const Mark = sequelize.define(alias, cols);
  // Mark.associate = function (models) {
  //   Mark.belongsTo(models.products, {
  //     as: "Product",
  //     foreignKey: "markId"
  //   });
  // }


  return Mark;
};