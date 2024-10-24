// In your routes (e.g., orderRoutes.js)
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel'); // Assuming your Order model is in models directory

// Fetch orders for the current user
router.get('/orders/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).sort({ date: -1 }); // Sort by date (most recent first)
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
});

module.exports = router;
