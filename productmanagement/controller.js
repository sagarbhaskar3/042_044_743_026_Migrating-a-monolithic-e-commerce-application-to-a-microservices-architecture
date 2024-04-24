const { model } = require("mongoose");
const  Product  = require("./models.js")
const { MongoClient ,ObjectId  } = require('mongodb'); 
const uri = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`  
//const uri = "mongodb+srv://tashwinsj:IphjHOpNtQRIMKzV@cluster0.9roggk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { });


const addprod =  async(req ,res)=>{
    try{
    const {name , img , description , price , category , stock_quantity} = req.body
    const db= client.db("CC_project") ; 
    const collection = db.collection('products') ; 
 
    const Prod = new Product({name , img , description , price , category , stock_quantity }) ;  
    const result = await collection.insertOne(Prod) ; 
    return res.status(200).send("Product added successfully")

    }
    catch(err){
        res.status(500).send("Error adding the product")
    }
    
}
 
const get_products =  async(req , res)=>{
    try{
        const db = client.db("CC_project") ; 
        const collection = db.collection('products')  ; 

        const data = await collection.find({}).toArray() ; 
        res.json(data)
    } 
    catch(err){
        console.log(err) ; 
        res.status(500).send("Error retrieving data")
    }
}



const get_product_id = async(req , res)=>{
    const userId = req.body.id 
    const userid = userId.toString()
    try{
        const db = client.db("CC_project") ; 
        const collection = db.collection('products')  ; 
        const data = await collection.findOne({ _id: new ObjectId(userid) } ); 
        res.json(data)
    } 
    catch(err){
        console.log(err) ; 
        res.status(500).send("Error retrieving data")
    }
} 

const filter_category =  async(req , res)=>{
    try{
        const db = client.db("CC_project") ; 
        const collection = db.collection('products')  ; 
        const {category} = req.body
        const data = await collection.find({category  }).toArray() ; 
        res.json(data)
    } 
    catch(err){
        console.log(err) ; 
        res.status(500).send("Error retrieving data")
    }
}

module.exports = {  addprod , get_products , get_product_id , filter_category  }