const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const User = require('../models/userModel');

// Save order to database after password verification
router.post('/checkout', async (req, res) => {
    const { userId, items, totalAmount, password } = req.body;

    try {
        // Fetch user data
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Verify the password (assuming plain text for this example)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        // Create and save the new order
        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            date: new Date().toISOString(),
        });

        await newOrder.save();
        res.status(200).json({ message: 'Checkout successful', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error processing checkout', error });
    }
});

module.exports = router;
