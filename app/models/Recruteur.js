// grab the mongoose module
var mongoose = require('mongoose');

// define our Candidat model
var RecruteurSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String
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

RecruteurSchema.methods.getHashedPassword = function () {
  return this.password;
}

RecruteurSchema.methods.showInfo = function () {
  console.log("Recruteur's Informations:");
  console.log("Last name : " + this.lastname);
  console.log("First name : " + this.firstname);
  console.log("Email : " + this.email);
}

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Recruteur', RecruteurSchema);
