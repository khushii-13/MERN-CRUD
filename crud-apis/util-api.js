//Imports
const User = require("../models/userModel");

//Count all user api
const countUsers = async (req, res) => {
  try {
    const userCount = await User.countDocuments();

    return res.status(200).json({
      message: "User Counted Sucessfully",
      userCount: userCount,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

//exports
module.exports = countUsers;
