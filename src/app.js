const express = require('express');
const app = express();

//=>>> Error Handling
app.use("/" , ( err , req , res , next)=>{
    // is loged in 
  if(err){
    res.status(500).send("Something is wrong !! ")
  }
});

// try catch handle all 


app.get("/getUserData" , (req , res)=>{
   /*  try{
           throw new Error("jbrebiufrb");
           res.send("Something is wrong  !! ")
    }
    catch(err){
        // log the error 
        res.status(500).send("Something is wrong contact the team  !! ")
  
    } */
   throw new Error("jbrebiufrb");
   res.send("Something is wrong  !! ")
    
});

app.use("/" , ( err , req , res , next)=>{
  if(err){
    res.status(500).send("Something is wrong !! ")
  }
});


app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});