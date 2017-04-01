// MongoDB Schema for API Key

// Dependencies ==================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var APIKeySchema = mongoose.Schema({
    key: { type: String, unique: true },
    usage: [{ Number, Date }]
}, { collection: 'keys' });

// Export ==================
module.exports = mongoose.model('APIKey', APIKeySchema);