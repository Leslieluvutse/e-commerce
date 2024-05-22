module.exports=(sequelize,DataTypes) =>{
              const stock = sequelize.define('stocks',{
              id:{
                            type: DataTypes.INTEGER,
                            primaryKey:true,
                            autoIncrement:true,
                          },
                          itemName:{
                               type:DataTypes.STRING,
                               allowNull:true,
                          },
                          quantity:{
                            type:DataTypes.NUMBER,
                            allowNull:true,
                          },
                          price:{
                            type:DataTypes.NUMBER,
                            allowNull:true,
                          },
              });
return stock;
}