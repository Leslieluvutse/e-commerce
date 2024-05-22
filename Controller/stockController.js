const db = require('../Model/dbConnect')
const stock = db.stock

module.exports = {
    addStock : async(req, res, next)=> {
        try{
            let info = {
                id: req.body.id,
                itemName: req.body.itemName, 
                quantity: req.body.quantity,
                price: req.body.price,
            };
            const addStock = await stock.create(info);
        

        res.status(200).send("addStockMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllStocks:(req,res,next)=>{
        try{
            let stock = stock.findAll({})
            res.status(200).send(stock)
        }
        catch (error)
        {
            next(error)
        }
},

}