require("dotenv").config();
const express = require('express')
const app = express()
const port = 8000;

//connect database
const connectDB = require("./config/db");
connectDB();

// middleware
app.use(express.json({extended:false}));
app.get('/',(req,res)=>{
    res.send("server up and running")
})

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})