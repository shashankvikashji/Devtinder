
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema =  new mongoose.Schema({
    firstName : {
       type :String,
       required : true, 
       minLength : 4,
       maxLength : 15,
    },
    lastName : {
        type : String
    },
     emailId : {
        type : String,
        lowercase : true,
        require: true,
        unique : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address : " + value);
            }
        },
    },
     password : {
        type : String,
        require : true,
         validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong Password your password is week : " + value);
            }
        },

    },
     age : {
        type : Number,
        min : 18,
    },
     gender : {
        type : String,
        validate(value){
            if(!["male" , "female" , "others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl:{
        type:String,
        default : "https://www.bing.com/images/search?view=detailV2&ccid=JDqZ9cbP&id=1FEC376169B4A4A233F30E464E91EBB32E56855B&thid=OIP.JDqZ9cbP_XvNSa258lK-wAHaHa&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-vector%2fbusinessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg&exph=626&expw=626&q=dummy+user+full+photo+image&FORM=IRPRST&ck=26F2DF0FD35D03B8130B24AED7276EEE&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0",
         validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photo Url : " + value);
            }
        },
    },
    about: {
        type:String,
        default : " this is default about of user",
    },
    skills:{
        type: [String],
    },


},{
    timestamps : true,
})



module.exports = mongoose.model("user" , userSchema);