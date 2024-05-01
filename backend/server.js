const express = require('express');
const mainRoute =require("./routes/index.js");
const mongoose=require("mongoose");
const dotenv =require("dotenv");
const app = express();
const port =5000;

dotenv.config(); //env

const connect=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI) //mongodb de de connect vs code seçeneğinden aldık psw değiştirdik  env kütüphanesi ile connection stringi gizledik
        console.log("Connected MongoDb");
    } catch (error) {
        throw error;
    }
}
app.use("/api",mainRoute);
  app.listen(port,()=>
{
    connect();
    console.log(`Sunucu ${5000} portun da çalışıyor `);
} )