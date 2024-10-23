const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            name: { type: String, required: true },
            _id: { type: String, required: true }, // Assuming you want a string for _id
            image: { type: String, required: true }, // Assuming this is the image URL or path
            price: { type: Number, required: true }, // Changed to Number for integer prices
            
        }
    ],
    totalAmount: { type: Number, required: true },
    date: { type: String, required: true } // Date as a string
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
