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