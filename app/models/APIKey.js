// exports mongoDB APIKey Model

// Dependencies ===================================
var mongoose = require('mongoose');
var KeySchema = require('./KeySchema');

// Export =================================================
module.exports = mongoose.model('APIKey', KeySchema);