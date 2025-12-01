
const validator = require('validator');

const validateSingupData = (req) =>{

 const {firstName , lastName , emailId , password} = req.body;

 if(!firstName || ! lastName){
    throw new Error("Name is not valid");
 }
  else if(firstName.length < 4 || firstName.length > 50){
    throw new Error("First name should be 4-50 character !! ")
  }
  else if(!validator.isEmail(emailId)){
     throw new Error("Email is not valid email contain @ ")
  }
  else if(!validator.isStrongPassword(password)){
    throw new Error("Password may have at least 8 character which contains number character specialletter at least one upperletter !! ")

  }
  

};

module.exports = {
   validateSingupData,
};