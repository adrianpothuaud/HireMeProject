// MongoDB Schema for Admin User

// Dependencies ==================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var AdminSchema = mongoose.Schema({
    email: String,
    password: String
}, { collection : 'admins'});

// Schema's methods =================================
// Getters ==========================================
AdminSchema.methods.getEmail = function () {
    return this.email;
}
AdminSchema.methods.getHashedPassword = function () {
    return this.password;
}
// Setterrs ====================================
AdminSchema.methods.setEmail = function (n) {
    this.email = n;
}
AdminSchema.methods.setPassword = function (n) {
    // encryption
    this.password = n;
}

// Export ==================
module.exports = AdminSchema;