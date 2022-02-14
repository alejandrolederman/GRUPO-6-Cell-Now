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
      type: dataTypes.STRING(50),
    },
    price: {
      type: dataTypes.INTEGER(20),
    },
    discount: {
      type: dataTypes.INTEGER(10),
    },
    camera: {
      type: dataTypes.STRING(50),
    },
    screen: {
      type: dataTypes.STRING(50),
    },
    memory:{
      type: dataTypes.STRING(20),
    },
    unlocking: {
      type: dataTypes.STRING(50),
    },
    description: {
      type: dataTypes.STRING(500),
    },
    image: {
      type: dataTypes.STRING(50),
    },
    
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.User, {
      as: "users",
      through: "Trolley",
      foreignKey: "productId",
      otherKey: "userId",
      timetamps: false
    });
  
    Product.belongsTo(models.Mark, {
      as: "Mark",
      foreignKey: "markId"

    });
    };

  return Product;
};

// module.exports = (sequelize, dataTypes) => {
//   let alias = 'Dish';
//   let cols = {
//       id: {
//           type: dataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//       },
//       name: dataTypes.STRING,
//       description: dataTypes.STRING,
//       price: dataTypes.DECIMAL,
//       discount: dataTypes.INTEGER,
//       recommended: dataTypes.INTEGER,
//       image: dataTypes.STRING
//   };
//   /*let config = {
//       tableName: 'Papachos',
//       timestamps: false
//   };*/
      
  
//   const Dish = sequelize.define(alias, cols)
//   //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
//   Dish.associate = function(models) {
//       Dish.belongsTo(models.Category, {
//               as : 'category',
//               foreignKey: 'categoryId'
          
//       });

//       //Aquí hago la relación entre mi módelo Dish y mi tabla items  la cual contiene todo lo que el usuario está comprando
//       Dish.hasMany(models.Item, {
//           as: "items",
//           foreignKey: "productId",
//       });

//       /*Dish.belongsTo(models.User, {
//           as: "user",
//           foreignKey: "userId",
//       });*/

//   };
//   return Dish
// }

// module.exports = (sequelize, dataTypes) => {
//   let alias = 'Category';
//   let cols = {
//       id: {
//           type: dataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//       },
//       name: dataTypes.STRING,
//   };
//   /*let config = {
//       tableName: 'categories',
//       timestamps: false
//   };*/
//   const Category = sequelize.define(alias, cols) 
//   //Aquí creo la relación con la tabla Dishes  - OJo: Relación de 1 a muchos
//   Category.associate = function(models){
//       Category.hasMany(models.Dish,{
//               as: 'dishes',
//               foreignKey: 'categoryId'})}   
//   return Category
// }



