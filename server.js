// Imports
const express = require("express");
const mongoose  = require("mongoose");
const dotenv = require("dotenv");

// Important Calls
dotenv.config();
const app = express();

// Declarations
const PORT = process.env.PORT || 8000 ;

// DB Connetion and Server Listen
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected successfuly");
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    });
}).catch((error)=>{
    console.log(error);
})


app.get("/",(req,res)=>{
 res.send("<h1>HIII</h1>");
})


