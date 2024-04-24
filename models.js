const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: String,
    img : String , 
    description: String,
    price: Number,
    category: String,
    stock_quantity: Number
  })
module.exports = mongoose.model("Product" , ProductSchema) ;  