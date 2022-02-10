module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    markId: {
      
      type: dataTypes.INTEGER,
    },
    model: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.STRING(280),
    },
    
    camera: {
<<<<<<< HEAD
      type: dataTypes.INTEGER,
    },
    model: {
      type: dataTypes.STRING,
=======
      type: dataTypes.STRING(280),
>>>>>>> 0fbd0977caccde16881ddb02e1a06e0c506e3e6d
    },
    
    screen: {
      type: dataTypes.STRING(280),
    },
    unlocking: {
      type: dataTypes.STRING(280),
    },
    description: {
      type: dataTypes.STRING(500),
    },
    image: {
      type: dataTypes.STRING(280),
    },
    discount: {
      type: dataTypes.STRING(280),
    },
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols);


  Product.associate = function (models) {
    Product.belongsToMany(models.User, {
      as: "users",
      through: "Trolley",
      foreignKey: "productId",
      otherKey: "userId",
      timetamps: false
    });
  
  
<<<<<<< HEAD
    // Product.belongsTo(models.mark, {
    //   as: "Mark",
    //   foreignKey: "MarkId"

    // });
    };
=======
    Product.belongsTo(models.Mark, {
      as: "mark",
      foreignKey: "markId"

    });
  
 
    Product.belongsTo(models.Model, {
      as: "model",
      foreignKey: "modelId"

    })
  };
>>>>>>> 0fbd0977caccde16881ddb02e1a06e0c506e3e6d
  return Product;
};