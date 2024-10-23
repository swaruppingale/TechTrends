const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Capitalize 'User'

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, phonenumber, password } = req.body;
    const newUser = new User({ name, email, phonenumber, password }); // Use capitalized 'User' model

    try {
        // Save the new user to the database
        await newUser.save();
        res.status(200).json({
            success: true,
            message: 'Registration successful',
        });
    } catch (error) {
        // Error handling
        res.status(400).json({
            success: false,
            message: error.message || 'Registration failed',
        });
    }
});
router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.find({email,password})
        if(user.length>0){
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._Id
            }
            res.status(200).send(currentUser)
        }else{
            res.status(400).json({
                message:'Login Failed'
            })
        }
    } catch (error) {
        res.status(404).json({
            message:'something went wrong'
        })
    }
})
module.exports = router;
