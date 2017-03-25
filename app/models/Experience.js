// exports mongoDB Experience Model

// Dependencies =======================================
var mongoose = require('mongoose');
var ExperienceSchema = require('./ExperienceSchema.js');

// Export =================================================
module.exports = mongoose.model('Experience', ExperienceSchema);
