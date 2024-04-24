const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({
    username : String ,  fname : String , cardn : String , expd : String , expm : String , cvv : String , shippingname: String  , address : String , city : String ,zip : String  , country: String  , orders :Object
  
  }) 
  const Order = mongoose.model("Order" , OrderSchema)
  
  const PaymentSchema = mongoose.Schema({
      username : String , 
      order_id : String , 
      total_price : Number , 
      Payment_method : String , 
      Created_at : Date ,  
      status : String , 
      transaction_id : String 
  
  }) 
  const Payment = mongoose.model("Payment" , PaymentSchema) 

module.exports = { Order , Payment }