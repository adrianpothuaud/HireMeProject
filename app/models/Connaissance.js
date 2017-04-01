// MongoDB Schema for Connaissance object

// Dependencies ================================================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var ConnaissanceSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String }
}, { collection: "connaissances" });

// Export =====================
module.exports = mongoose.model('Connaissance', ConnaissanceSchema);