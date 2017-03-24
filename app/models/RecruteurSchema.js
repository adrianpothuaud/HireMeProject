// grab the mongoose module
var mongoose = require('mongoose');

// define our Candidat model
var RecruteurSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accounttype: String,
    enterprisename: String
});

// define Candidat's methods
RecruteurSchema.methods.getLastName = function () {
    return this.lastname;
}

RecruteurSchema.methods.getFirstName = function () {
    return this.firstname;
}

RecruteurSchema.methods.getEmail = function () {
    return this.email;
}

RecruteurSchema.methods.getPassword = function () {
    return this.password;
}

RecruteurSchema.methods.getEnterpriseName = function () {
    return this.enterprisename;
}

RecruteurSchema.methods.setLastName = function (n) {
    this.lastname = n;
}

RecruteurSchema.methods.setFirstName = function (n) {
    this.firstname = n;
}

RecruteurSchema.methods.setEmail = function (n) {
    this.email = n;
}

RecruteurSchema.methods.setPassword = function (n) {
    this.password = n;
}

RecruteurSchema.methods.setEnterpriseName = function (n) {
    this.enterprisename = n;
}

RecruteurSchema.methods.showInfo = function () {
  console.log("Recruteur's Informations:");
  console.log("Last name : " + this.lastname);
  console.log("First name : " + this.firstname);
  console.log("Email : " + this.email);
}

module.exports = RecruteurSchema;