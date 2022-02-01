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
  
    const categoria = sequelize.define(alias, cols, config);
    // categoria.associate = function (models) {
    //     categoria.belongsTo(models.users, {
    //     as: "users",
    //     foreignKey: "user_category_id"
  
      // })
    // }
  
  
    return categoria;
  };