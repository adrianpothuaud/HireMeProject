// MongoDB Schema for Connaissance object

// Dependencies ================================================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var ConnaissanceSchema = mongoose.Schema({
	name : {type : String, default: ''},
	level : {type : String, default: ''}
}, {collection: "connaissances"});

// Schema's methods =================================
// Getters ==========================================
ConnaissanceSchema.methods.getName = function () {
    return this.name;
}
ConnaissanceSchema.methods.getLevel = function () {
    return this.level;
}
// Setters ==========================================
ConnaissanceSchema.methods.setName = function (n) {
    this.name = n;
}
ConnaissanceSchema.methods.setLevel = function (n) {
    this.level = n;
}

// Export =====================
module.exports = ConnaissanceSchema;