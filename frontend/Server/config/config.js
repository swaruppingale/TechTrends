const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {
    try {
        const URL = process.env.MONGO_URI;
        const conn = await mongoose.connect(URL);
        console.log(`MONGO DB CONNECTED: ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`Error: ${error.message}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
