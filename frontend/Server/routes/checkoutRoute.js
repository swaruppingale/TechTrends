const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { userId, items, totalAmount} = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' })
        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            date: new Date().toISOString(),
        });

        await newOrder.save();
        res.status(200).json({ message: 'Checkout successful', order: newOrder });
    } catch (error) {
        console.error('Error processing checkout:', error);
        res.status(500).json({ message: 'Error processing checkout', error });
    }
});


module.exports = router;
