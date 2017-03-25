// exports mongoDB Candidat Model

// Dependencies ===================================
var mongoose = require('mongoose');
var CandidatSchema = require('./CandidatSchema.js');

// Export =================================================
module.exports = mongoose.model('Candidat', CandidatSchema);
