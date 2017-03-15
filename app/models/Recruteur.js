// grab the mongoose module
var mongoose = require('mongoose');

// define our Candidat model
var RecruteurSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String
});

// define Candidat's methods
RecruteurSchema.methods.getLastName = function () {
  return this.lastName;
}

RecruteurSchema.methods.getFirstName = function () {
  return this.firstName;
}

RecruteurSchema.methods.getEmail = function () {
  return this.email;
}

RecruteurSchema.methods.getHashedPassword = function () {
  return this.password;
}

RecruteurSchema.methods.showInfo = function () {
  console.log("Recruteur's Informations:");
  console.log("Last name : " + this.lastName);
  console.log("First name : " + this.FirstName);
  console.log("Email : " + this.email);
}

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Recruteur', RecruteurSchema);
