const express = require('express');
const cors = require('cors');

require('dotenv').config();
const connectDB = require('./config/db');

// create an instance of the express js app
const app = express();

// set up necessary middlewares for express app
app.use(express.json());

let PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
