// grab the mongoose module
var mongoose = require('mongoose');

// define our Candidat model
var CandidatSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String
});

// define Candidat's methods
CandidatSchema.methods.getLastName = function () {
  return this.lastName;
}

CandidatSchema.methods.getFirstName = function () {
  return this.firstName;
}

CandidatSchema.methods.getEmail = function () {
  return this.email;
}

CandidatSchema.methods.getHashedPassword = function () {
  return this.password;
}

CandidatSchema.methods.showInfo = function () {
  console.log("Candidat's Informations:");
  console.log("Last name : " + this.lastName);
  console.log("First name : " + this.FirstName);
  console.log("Email : " + this.email);
}

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Candidat', CandidatSchema);
