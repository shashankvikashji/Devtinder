const express = require('express');
const app = express();

const {adminAuth , userAuth} = require("./middleware/auth")

app.use("/admin" , adminAuth);

app.use("/user" , userAuth);

app.get("/user/getAll" , (req , res) => {
    res.send("All User is send !! ")
})

// Handling a middleware and Express route 

app.get("/admin/getAllData" , (req , res)=>{
     res.send("All data is sucessfull sent !! ")
})

app.get("/admin/deleteAllData" , (req,res)=>{
    res.send("All data is delete !!")
})




app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});