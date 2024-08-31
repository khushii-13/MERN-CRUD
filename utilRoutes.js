//Imports
const express = require("express");
const countUsers = require("./crud-apis/util-api");

//Important calls
const router = express.Router();

//Routes
router.route("/count-users").get(countUsers);

//exports
module.exports = router;