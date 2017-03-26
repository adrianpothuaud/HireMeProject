// MongoDB Schema for API Key

// Dependencies ==================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var KeySchema = mongoose.Schema({
    key: String,
    usage: [{ Number, Date }]
}, { collection: 'keys' });

// Schema's methods =================================
// Getters ==========================================

// Export ==================
module.exports = KeySchema;