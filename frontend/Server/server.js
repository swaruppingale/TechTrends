const express =require('express');
const morgan = require('morgan');
const dotenv=require('dotenv');
const connectDB=require('./config/config');

require('colors')
const app=express()
app.use(express.json())
app.use(morgan('dev'))



//config env
dotenv.config()

//connect db

connectDB()


app.get('/',(req,res)=>{
    res.send("<h1>hello from node server</h1>");
});
const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});
