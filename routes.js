//imports
const express = require("express");
const {registerUser,getAllUsers,getParticularUser ,deleteParticularUser,updateParticularUser} = require("./crud-apis/user-api");

//important calls
const router = express.Router();

//routes
router.route("/").post(registerUser);
router.route("/get-all-users").get(getAllUsers);
router.route("/get-particular-user").get(getParticularUser);
router.route("/delete-particular-user").delete(deleteParticularUser);
router.route("/update-particular-user").put(updateParticularUser);

//exports
module.exports = router;