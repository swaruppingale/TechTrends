const express =require('express');
const morgan = require('morgan');
const dotenv=require('dotenv');
const connectDB=require('./config/config');
const cors=require('cors')
require('colors')
//config env
dotenv.config()


//connect db

connectDB()

const app=express()
//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors());



//route
app.use("/api/items",require("./routes/itemRoute"));
app.use("/api/users",require("./routes/userRoute"))
app.use("/api/checkout",require("./routes/checkoutRoute"))
app.get('/',(req,res)=>{
    res.send("<h1>hello from node server</h1>");
});
const port=process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${port}`.bgMagenta.white); // Fixed the port display
});

