//imports
const express = require("express");
const registerUser = require("./crud-apis/user-api");

//important calls
const router = express.Router();

//routes
router.route("/").post(registerUser);

//exports
module.exports = router;