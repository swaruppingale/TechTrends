const mongoose=require('mongoose')

const itemsSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,  // Use `Number` instead of `Int`
        required: true
    },
    image: {
        type: String,  // URL or path to the image
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps:true});
const itemsModel=mongoose.model('items',itemsSchema)
module.exports=itemsModel;