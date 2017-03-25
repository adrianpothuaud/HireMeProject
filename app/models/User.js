// exports mongoDB User Model

// Dependencies ===================================
var mongoose = require('mongoose');
var UserSchema = require('./UserSchema');

// Export =================================================
module.exports = mongoose.model('User', UserSchema);