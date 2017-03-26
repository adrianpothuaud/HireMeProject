// exports mongoDB Connaissance Model

// Dependencies ===================================
var mongoose = require('mongoose');
var ConnaissanceSchema = require('./ConnaissanceSchema');

// Export =================================================
module.exports = mongoose.model('Connaissance', ConnaissanceSchema);