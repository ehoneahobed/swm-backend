const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a USER SCHEMA
const ActivitySchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    
    activity: {
        type: String,
        required: true,
    }, 
    
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

// export schema for use
module.exports = mongoose.model('Activity', ActivitySchema);
