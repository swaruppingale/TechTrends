const mongoose=require('mongoose')
const dotenv=require('dotenv')
require('colors')
const connectDB=require('./config/config')
const item=require('./models/itemsModel')
const items=require('./data/itemsdata')
//config dotenv and mongodb conn file
dotenv.config()
connectDB()
const importData=async()=>{
    try{
        await item.deleteMany()
        const sampleData=items.map(item=>{return{...item}})
        await item.insertMany(sampleData)
        console.log(`DATA IMPORTED`.bgGreen.white)
        process.exit()

    }catch(error){
        console.log(`${error}`.bgRed.white)
        process.exit(1)

    }
}
const dataDestroy=()=>{};
if(process.argv[2]==='-d'){
    dataDestroy();
}else{
    importData();
}