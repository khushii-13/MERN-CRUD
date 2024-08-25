// Imports
const express = require("express");
const mongoose  = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");
const router = require("./routes");

// Important Calls
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/v1",router);

// Declarations
const PORT = process.env.PORT || 8000 ;

// DB Connetion and Server Listen
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected successfuly");
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    });
}).catch((error )=>{
    console.log(error);
})




