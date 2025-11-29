const express = require('express');
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user");


app.use(express.json());


app.post("/signup" , async (req , res) => {

    
     // creating a new instance of the user models 

     const user = new User(req.body);
    /* const user = new User({
      firstName : "Virat",
    lastName :"Kholi",
    emailId :"skd@gmail.com",
    password : "shashank1234"
    }); */
   
   try{
    await user.save();
   res.send("User Added Succesfully !!! ")
   } catch(err){
       res.status(400).send("Error saving the user : " + err.message);
   }

})



// Get user by email

app.get("/user" , async(req , res) => {

    /// =>> This is findone method 
     const userEmail = req.body.emailId;
    try{
        const user = await User.findOne({ emailId : userEmail });
        if(!user){
             res.status(404).send("user not found " );
        }else{
               res.send(user);
        }
          

     /// =>> This is find method 
   /*  const userEmail = req.body.emailId;
    try{
        const users = await User.find({ emailId : userEmail });
        if(users.length === 0){
            res.status(404).send("user not found " );
        }else{
            res.send(users);
        } */
    }catch (err ) {
        res.status(404).send("Something get wrong " );
    }
})



// Feed api - Get /feed - get all the users from the data base 
app.get("/feed" , async (req , res) => {
     try{
        const users = await User.find({});
         res.send(users);
     }catch(err){

       res.status(404).send("Something get wrong " );
     }
})


connectDB().then(()=>{
    console.log("Database connection established ......")
    app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});
}).catch(err=>{
    console.error("Database connection can't be connected  .....")
})

