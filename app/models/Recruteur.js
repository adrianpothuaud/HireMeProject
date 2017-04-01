// MongoDB Schema for Candidat User

// Dependencies ===================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var RecruteurSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String, // hash
    accountType: String,
    enterpriseName: String
}, { collection: "recruteurs" });

// Export =====================
module.exports = mongoose.model('Recruteur', RecruteurSchema);