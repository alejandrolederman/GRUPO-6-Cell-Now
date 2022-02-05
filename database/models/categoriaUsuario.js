module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory";
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
    //   tableName: "user_category",
    //   timestamps: false,
    // };
  
    const UserCategory = sequelize.define(alias, cols, config);
    UserCategory.associate = function (models) {
      UserCategory.hasMany(models.users, {
        as: "users",
        foreignKey: "userCategoryId"
      });
    }
  
  
    return UserCategory;
  };