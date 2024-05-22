const dbConfig = require("../Config/dbConfig");
const {Sequelize, DataTypes} = require("sequelize");

// const Sequelize = new Sequelize();

const sequelize = new Sequelize(
              dbConfig.DB,
              dbConfig.USER,
              dbConfig.PASSWORD,{
                  host: dbConfig.HOST,
                  dialect: dbConfig.dialect,
                    operatorAliases: false,  //if errors in your code will overwrite
              }); 

              sequelize
              .authenticate()
              //promise
              .then(()=> {
                   console.log("Database Connection Successful...");
              })
              .catch((err)=>{
                      console.log("Error" + err);
              });

              const db = {};

              db.Sequelize = Sequelize;
              db.sequelize = sequelize;

              
              

db.sequelize.sync ({force:false})
.then(()=>{
 console.log('re-sync done');
 })
 db.stock = require( "./stockModel.js")(sequelize, DataTypes);

  module.exports = db;