const express =require ('express');
const app = express();
const stockRoute =require("./Routes/stockRoute");
require( 'dotenv').config();
require("./Model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware
app.use('/api/stock',stockRoute);
app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:https://localhost:4000');
});
