module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: dataTypes.STRING(100)
      },
      last_name: {
        type: dataTypes.STRING(100)
      },
      user_name: {
        type: dataTypes.STRING(100)
      },
      email: {
        type: dataTypes.STRING(100)
      },
      password: {
        type: dataTypes.STRING(100)
      },
      category: {
        type: dataTypes.INTEGER
      },
      avatar:{
          type: dataTypes.STRING(100)
      }

    };
    let config = {
      tableName: "users",
      timestamps: false,
    };
  
    const User = sequelize.define(alias, cols, config);
  
      
    return User;
  };