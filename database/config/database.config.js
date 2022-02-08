// const { Sequelize, DataTypes} = require("sequelize");
// const KeyDB = require("./key.db.config");

// const sequelize = require("sequelize");
// const sequelize = require("sequelize")


// const sqlize = new Sequelize(KeyDB.DATABASE, KeyDB.USER_NAME, KeyDB.PASSWORD, {
//   host: KeyDB.HOST,
//   dialect: KeyDB.DIALECT
// });


// const checkSqlize = async () => {
//   try {
//     await sqlize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// const UsersSyncDB = async (switchTF) => {
//     try {
//       await Users.sync({ force: switchTF });
//     } catch (err) {
//         console.log("err syncDB: ", err);
//     }
//   };
  
//   const Users = sqlize.define("users", {
//       id:{type:Sequelize.INTEGER, primaryKey: true, allowNull:false, autoIncrement:true },
//       name: {type:Sequelize.STRING, allowNull: false},
//       email:{type:Sequelize.STRING, allowNull: false}
//    }, {
//      timestamps:false
//    });
   
  
// module.exports = {
//     sqlize,
//     Sequelize,
//     models: {
//       Users
//     },
//     fnUtils: {
//       checkSqlize,
//       UsersSyncDB
//     }
//   };
  const {Sequelize} = require("sequelize");
  const connect = new Sequelize ("cellnow","root",null,{
    host: 'localhost',
    dialect:'mysql'
  } );


  async function checkConnet(){
    try{
      await connect.authenticate();
      console.log("connet true");
    } catch (err){
      console.log("error/checkConnect", err);
    }finally{
      connect.close()
    }
  }
 module,exports = {
   connect,
    };
    checkConnet()