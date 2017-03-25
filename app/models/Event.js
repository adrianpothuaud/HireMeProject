// exports mongoDB Event Model

// Dependencies ===================================
var mongoose = require('mongoose');
var EventSchema = require('./EventSchema.js');

// Export =================================================
module.exports = mongoose.model('Event', EventSchema);
