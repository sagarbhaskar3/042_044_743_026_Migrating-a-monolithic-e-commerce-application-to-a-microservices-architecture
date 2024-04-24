const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    username : String , 
    items :[
       { product_id : String ,
        quantity: Number }
    ] 
})  

module.exports = mongoose.model("Cart" , CartSchema)  ;  
