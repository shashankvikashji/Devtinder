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




connectDB().then(()=>{
    console.log("Database connection established ......")
    app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});
}).catch(err=>{
    console.error("Database connection can't be connected  .....")
})

