// MongoDB Schema for Candidat User

// Dependencies ================================================
var mongoose = require('mongoose');
// var extend = require('mongoose-schema-extend'); // unused yet
var ExperienceSchema = require('./ExperienceSchema.js');
var ConnaissanceSchema = require('./ConnaissanceSchema.js');

// Basic Schema with attributes and collection spec
var CandidatSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accountType: String,
    experiences: [ExperienceSchema],
    connaissances: [ConnaissanceSchema]
}, { collection : 'candidats'});

// Schema's methods =================================
// Getters ==========================================
CandidatSchema.methods.getLastName = function () {
    return this.lastname;
}
CandidatSchema.methods.getFirstName = function () {
    return this.firstname;
}
CandidatSchema.methods.getEmail = function () {
    return this.email;
}
CandidatSchema.methods.getPassword = function () {
    // decryption method
    return this.password;
}
// Setters ==========================================
CandidatSchema.methods.setLastName = function (n) {
    this.lastname = n;
}
CandidatSchema.methods.setFirstName = function (n) {
    this.firstname = n;
}
CandidatSchema.methods.setEmail = function (n) {
    this.email = n;
}
CandidatSchema.methods.setPassword = function (n) {
    // encryption method for n
    this.password = n;
}

// Show Info method for logs ==================
CandidatSchema.methods.showInfo = function () {
  console.log("Candidat's Informations:");
  console.log("Last name : " + this.lastname);
  console.log("First name : " + this.firstname);
  console.log("Email : " + this.email);
}

// Export =====================
module.exports = CandidatSchema;