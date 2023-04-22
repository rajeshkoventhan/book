const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config")

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hellow")
})

hotalRoute = require("./routes/hotals")
app.use("/hotals",hotalRoute)





const  connect = async () =>{ 

    try {
        const data = await mongoose.connect(process.env.DB_CONNECTION,{})
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    
    
      
    }
    connect()

    

    

app.listen(3000,()=>{
console.log("helloe")
})