const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const cors = require('cors');
require('colors');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Create Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Register routes
app.use("/api/items", require("./routes/itemRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/checkout", require("./routes/checkoutRoute")); // Ensure this line is present
app.use("/api/orders",require('./routes/orderRoute'))

app.get('/', (req, res) => {
    res.send("<h1>Hello from the Node server</h1>");
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`.bgMagenta.white);
});
