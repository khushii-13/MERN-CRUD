//imports
const User = require("../models/userModel");

//register user api
const registerUser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    //checking for not eligible person
    if (age < 18) {
      return res.status(406).json({
        message: "you are not eligible",
      });
    }
    //checking for duplicate email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "email is already registered",
      });
    }
    const userData = await new User({
      name,
      email,
      age,
    });
    await userData.save();
    return res.status(201).json({
      message: "user created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//get all user api
const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      return res.status(200).json({
        message: "data fetched sucessfully",
        data: data,
      });
    } else {
      return res.status(400).json({
        message: "data not found",
        data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//get single user
const getParticularUser = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await User.findOne({ _id: id });
    if (data) {
      return res.status(200).json({
        message: "data fetched sucessfully",
        data: data,
      });
    } else {
      return res.status(400).json({
        message: "data not found",
        data: data,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//update api 
const updateParticularUser = async(req,res)=>{
try {
    const { id } = req.query;
    const {name,age,email} = req.body;
    const data = await User.updateOne({ _id: id },{$set:{name,age,email}});
    return res.status(200).json({
      message: "data updated sucessfully",
    });

} catch (error) {
  return res.status(400).json({
        message: error.message,
  });
}
}

//delete api
const deleteParticularUser = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await User.deleteOne({ _id: id });
    return res.status(200).json({
      message: "data deleted sucessfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//exports

module.exports = {
  registerUser,
  getAllUsers,
  getParticularUser,
  deleteParticularUser,
  updateParticularUser
};
