const mongoose = require('mongoose');

// get the database connection string
let MONGODB_URI = process.env.MONGODB_URI;
// console.log(`Connection string: ${MONGODB_URI}`);

const connectDB = async () => {
    try {
        // connect to MongoDB database
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database successfully");
    } catch (error) {
        console.error(`Unable to connect to database: ${error}`);
    }
}

module.exports = connectDB;
