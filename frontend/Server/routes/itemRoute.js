const express=require('express');
const router=express.Router();
const itemsModel=require('../models/itemsModel')

// GET ALL ITENS || @GET REQUEST
router.get('/getAllItems',async(req,res)=>{
    try {
        const items=await itemsModel.find({})
        res.status(200).json(items)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports =router;