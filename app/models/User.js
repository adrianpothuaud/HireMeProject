// MongoDB Schema for Candidat User
// To be improved ... Candidat & Recruteur will extend this Schema
// using mongoose-extend

// Dependencies ===================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var UserSchema = mongoose.Schema({

}, { collection: "users" });

// Schema's methods =================================
// Getters ==========================================
// Setters ==========================================

// Export =================
module.exports = mongoose.model('User', UserSchema);