const express = require('express');
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user");
const user = require('./models/user');
const {validateSingupData} = require("./utils/validation")
const bcrypt = require("bcrypt");


app.use(express.json());


app.post("/signup" , async (req , res) => {
 
    try{

    //== validation of data
    validateSingupData(req);

    //===  Encrypt password 

    const {firstName , lastName , emailId , password , skills ,age ,gender} = req.body;

    const passwordHash = await bcrypt.hash(password , 10 );
    console.log(passwordHash);
    
     // creating a new instance of the user models 

     const user = new User({
        firstName , lastName , emailId , password : passwordHash , skills ,age ,gender
     });
   
    await user.save();
   res.send("User Added Succesfully !!! ")
   } catch(err){
       res.status(400).send("ERROR : " + err.message);
   }

});



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


/// Deleting the api using findByIdAndDelete

app.delete("/user" , async (req , res ) => {
    const userId = req.body.userId;
    try{
     const user = await User.findByIdAndDelete(userId);
      // const user = await User.findByIdAndDelete({_id : userId});
      res.send("user delete successfully ");
    }catch(err){
         res.status(404).send("Something get wrong " );
    }
});


// update data of the user
app.patch("/user/:userId" , async(req , res) => {
    const userId = req.params?.userId;
    const data = req.body;


    try{

        const ALLOWED_UPDATEs = [
    "userId" , "photoUrl" , "about" , "gender" , "skills" , "age"
    ]

    const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATEs.includes(k));

    if(!isUpdateAllowed){
        throw new Error("update not allowed ");
    }
    
    if(data?.skills.length > 10){
        throw new Error("Please Enter Only Top 10 Skills")
    }

    const user =   await User.findByIdAndUpdate( userId , data , {
        returnDocument:"after",
        runValidators:true,
    });
    console.log(user);
    res.send("User updated sucessfully !! ")

    }catch(err){
         res.status(404).send("Update Failed" + err.message );
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

