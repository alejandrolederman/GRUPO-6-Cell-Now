module.exports = (sequelize, dataTypes) => {
    let alias = "user_category";
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
      tableName: "user_category",
      timestamps: false,
    };
  
    const user_category = sequelize.define(alias, cols, config);
    user_category.associate = function (models) {
      user_category.hasMany(models.users, {
        as: "users",
        foreignKey: "user_category_id"
      });
    }
  
  
    return user_category;
  };