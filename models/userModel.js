// Import
const mongoose = require('mongoose');

// Defined Schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    age : {
        type : Number
    }
},{
    timestamps:true
})


//create model
const User =  mongoose.model("User",userSchema);

//exports
module.exports = User ;