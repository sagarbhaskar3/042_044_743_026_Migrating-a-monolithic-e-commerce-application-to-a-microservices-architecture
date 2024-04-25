const { model } = require("mongoose");
const  User  = require("./models.js")
const { MongoClient ,ObjectId  } = require('mongodb'); 
const uri = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`
const client = new MongoClient(uri, { });



const register =  async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const db = client.db('CC_project');
      const collection = db.collection('users');
      const user = new User({ username, email, password }); 
      const existingUser = await collection.findOne({ username: user.username });
      if (existingUser) {
      return res.status(400).send({message : 'Username already taken. Please choose another.'});
      }

      const result = await collection.insertOne(user);
      res.status(201).send({ message: 'User created successfully', userId: result.insertedId });

    } catch (err) {
      console.error(err);
      res.status(500).send('Error registering user');
    }
}


const login = async (req ,res)=>{
    try{
        const {uname , pword} = req.body ; 
        const db= client.db("CC_project") ; 
        const collection = db.collection('users') ; 
        const realUser = await collection.findOne({username : uname}) 
        if ( realUser ){ 
            if(realUser.username === uname && realUser.password === pword) {
                return res.status(200).send({message :"Login Successfull"})
            }
            else{
                return res.status(500).send({message :"Incorrect password"})
            }
       }
        else{
            return res.status(404).send({message :"User not found , register please"})
        }
    } 
    catch(err){
        console.error(err) ; 
        res.status(500).send('Error logging in')
    }
}

module.exports = { register , login }