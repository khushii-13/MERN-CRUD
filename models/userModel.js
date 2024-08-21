// Imports
const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  age :{
    type : Number
  }
});

//create model
const User =  mongoose.model("User",userSchema);

//exports
module.exports = User ;