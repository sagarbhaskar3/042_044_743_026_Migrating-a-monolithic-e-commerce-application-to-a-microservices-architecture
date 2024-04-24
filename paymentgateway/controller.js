const { model } = require("mongoose");
const  {Order , Payment}  = require("./models.js")
const { MongoClient ,ObjectId  } = require('mongodb'); 
//const uri = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`  
const uri = "mongodb+srv://tashwinsj:IphjHOpNtQRIMKzV@cluster0.9roggk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { });


 
// orders - payment gateway routes 
const add_order =  async(req , res)=>{
    try{
        const { username , fname , cardn , expd , expm , cvv , shippingname , address , city ,zip  , country , orders } = req.body
        const db= client.db("CC_project") ; 
        const collection = db.collection('orders') ; 
     
        const order = new Order({username ,fname , cardn , expd , expm , cvv , shippingname , address , city ,zip  , country ,orders}) ;  
        const result = await collection.insertOne(order) ; 
        const cartcollection = db.collection("cart") 
        try{
            const cart = await cartcollection.findOneAndUpdate(
                {username : username } ,
                { $set: { items: {} } } 
            )
        }
        catch(err){
            return res.status(404).send({message: "Cart not found error"})
        }
        return res.status(200).send({message : "Order added successfully"})
    
        }
        catch(err){
            console.log(err)
            res.status(500).send("Error adding order")
        }
}

const get_orders = async(req , res)=>{
    try{

        const db= client.db("CC_project") ; 
        const collection = db.collection('orders') ; 
        const {username} = req.body ; 
        const data = await collection.find({username}).toArray()
        res.json(data)
    
        }
        catch(err){
            console.log(err)
            res.status(500).send("Error getting order")
        }
}
//payment routes 

const add_payment = async(req , res)=>{
    try{
        const {username , Order , total_price ,Payment_method ,Created_at , status , transaction_id } = req.body
        const db= client.db("CC_project") ; 
        const collection = db.collection('payments') ; 
     
        const payment = new Payment({username , Order , total_price ,Payment_method ,Created_at , status , transaction_id  }) ;  
        const result = await collection.insertOne(payment) ; 
        return res.status(200).send("Payment done successfully")
    
        }
        catch(err){
            console.log(err)
            res.status(500).send("Error in the payments page")
        }
}

 

module.exports = { add_order ,get_orders ,add_payment }