module.exports = (sequelize, dataTypes) => {
  
  let alias = "Usercategory";
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
  tableName: "usercategory",
  timestamps: false
  }

  const Usercategory = sequelize.define(alias, cols, config);
  Usercategory.associate = function (models) {
    Usercategory.hasMany(models.User, {
      as: "users",
      foreignKey: "usercategoryId"
    });
  }

  return Usercategory;
};