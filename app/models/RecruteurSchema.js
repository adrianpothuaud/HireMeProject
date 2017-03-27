// MongoDB Schema for Candidat User

// Dependencies ===================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var RecruteurSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accountType: String,
    enterpriseName: String
}, { collection: "recruteurs" });

// Schema's methods =================================
// Getters ==========================================
RecruteurSchema.methods.getLastName = function() {
    return this.lastname;
}
RecruteurSchema.methods.getFirstName = function() {
    return this.firstname;
}
RecruteurSchema.methods.getEmail = function() {
    return this.email;
}
RecruteurSchema.methods.getPassword = function() {
    return this.password;
}
RecruteurSchema.methods.getEnterpriseName = function() {
        return this.enterprisename;
    }
    // Setters ==========================================
RecruteurSchema.methods.setLastName = function(n) {
    this.lastname = n;
}
RecruteurSchema.methods.setFirstName = function(n) {
    this.firstname = n;
}
RecruteurSchema.methods.setEmail = function(n) {
    this.email = n;
}
RecruteurSchema.methods.setPassword = function(n) {
    this.password = n;
}
RecruteurSchema.methods.setEnterpriseName = function(n) {
        this.enterprisename = n;
    }
    // Show Info method for logs ==================
RecruteurSchema.methods.showInfo = function() {
    console.log("Recruteur's Informations:");
    console.log("Last name : " + this.lastname);
    console.log("First name : " + this.firstname);
    console.log("Email : " + this.email);
}

// Export =====================
module.exports = RecruteurSchema;