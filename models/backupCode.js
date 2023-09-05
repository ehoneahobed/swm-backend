const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a USER SCHEMA
const backupCodeSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    code: {
        type: [String],
        required: true,
    }, 
    status: {
        type: String,
        enum: ['used', 'unused'],
        default: ['unused'],
    }
});

// export schema for use
module.exports = mongoose.model('Backup', BackupCodeSchema);
