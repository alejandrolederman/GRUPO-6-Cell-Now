module.exports = (sequelize, dataTypes) => {
  let alias = "Trolly";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: dataTypes.INTEGER,
    },
    prudctId: {
      type: dataTypes.INTEGER,
    },
    amount: {
      type: dataTypes.NUMBER(100),
    }
  };
  let config = {
    tableName: "Trolly",
    timestamps: false,
  };

  const Trolly = sequelize.define(alias, cols, config);




  return Trolly;
};