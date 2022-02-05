module.exports = (sequelize, dataTypes) => {
    let alias = "usercategory";
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
      timestamps: false,
    };
  
    const usercategory = sequelize.define(alias, cols, config);
    usercategory.associate = function (models) {
      usercategory.hasMany(models.users, {
        as: "users",
        foreignKey: "usercategoryId"
      });
    }
  
  
    return usercategory;
  };