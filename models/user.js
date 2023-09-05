const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a USER SCHEMA
const UserSchema = Schema({
    username: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
    }, 
    
    role: {
        type: String,
        enum: ['admin', 'moderator', 'host', 'participant'],
        default: 'participant'
    },
    mfaEnabled: {
        type: Boolean,
        default: false,
    },
    mfaSecret: {
        type: String,
        unique: true,
    }, 
    emailverified: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
    }, 
    accountStatus: {
        type: String,
        enum: ['active', 'inactive']
    }
});

// export schema for use
module.exports = mongoose.model('User', UserSchema);