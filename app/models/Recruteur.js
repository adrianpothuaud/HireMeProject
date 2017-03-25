// exports mongoDB Recruteur Model

// Dependencies ===================================
var mongoose = require('mongoose');
var RecruteurSchema = require('./RecruteurSchema.js');

// Export =================================================
module.exports = mongoose.model('Recruteur', RecruteurSchema);
