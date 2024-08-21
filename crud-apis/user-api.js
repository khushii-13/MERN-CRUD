//imports
const User = require("../models/userModel");

//api functions
const registerUser = async (req,res)=>{
const {name,email,age} = req.body;

try {
    if(age<18){
        return res.status(406).json({
            message :"you are not eligible"
        })
    }
    const user = await User.findOne({email});
    if(user){
        return res.status(409).json({
            message :"email is already registered"
        })
    }
    const userData = await new User({
        name,
        email,
        age
    })
    await userData.save();
    return res.status(201).json({
        message : "user created successfully"
    })
}
catch (error) {
    return res.status(400).json({
        message : error.message
    })
}
 
}

//exports
module.exports = registerUser;