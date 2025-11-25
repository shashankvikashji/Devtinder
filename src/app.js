const express = require('express');
const app = express();



// req / user  , /user/xyz
app.get( "/user/:userId/:name/:password" , (req,res) => {
    console.log(req.params);
    
    res.send({
        firstName: "Shashank" , lastName :"Dubey"
    })
});




app.listen(3000  , () => {
    console.log("Server is Successfully listening on port 3000 ! ");
    
});