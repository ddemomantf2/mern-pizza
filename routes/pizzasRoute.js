const express = require("exprress");
const router = express.router();
const Pizza = require('../models/pizzaModels')

router.get("/getallpizzas" , async(req , res) => {
    try{
            constpizzas = await Pizza.find({})
            res.send(pizzas)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});
module.exports = router;