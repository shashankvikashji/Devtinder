const express = require('express');
const app = express();



// order matter karta hai isi liye ye first pe nahi hoga 
app.use("/user" , (req ,res)=>{
    res.send("This is i Say order is matter !! ")
})

///->> This will only handle GET call to /user

app.get( "/user" , (req,res) => {
    res.send({
        firstName: "Shashank" , lastName :"Dubey"
    })
});

/// ->> This will match all the Http method API calls to /test

app.use( "/test" , (req,res) => {
    res.send("Hello from the server ! ")
});


app.post("/user" , (req , res) => {
    // Saving data to DB
    res.send("Data is sucessfully sent to DataBase ! ")
});

app.delete("/user" , (req,res)=>{
    res.send("Deletion is sucessfully !! ")
})
 

app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});