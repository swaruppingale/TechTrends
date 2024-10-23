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
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }); // Use findOne for better efficiency
        if (!user || user.password !== password) { // Verify user and password
            return res.status(400).json({ message: 'Login Failed' });
        }

        const currentUser = {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            _id: user._id, // Ensure _id is being set correctly
        };
        res.status(200).send(currentUser);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
