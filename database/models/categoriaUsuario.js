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
   

    const UserCategory = sequelize.define(alias, cols);
    // UserCategory.associate = function (models) {
    //   UserCategory.hasMany(models.users, {
    //     as: "users",
    //     foreignKey: "userCategoryId"
    //   });
    // }

let config = {
  tableName: "usercategory",
  // freezeTableName: true,
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