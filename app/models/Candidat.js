// grab the mongoose module
var mongoose = require('mongoose');

// define our Candidat model
var CandidatSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accounttype: String
});

// define Candidat's methods
CandidatSchema.methods.getLastName = function () {
  return this.lastname;
}

CandidatSchema.methods.getFirstName = function () {
  return this.firstname;
}

CandidatSchema.methods.getEmail = function () {
  return this.email;
}

CandidatSchema.methods.getHashedPassword = function () {
  return this.password;
}

CandidatSchema.methods.showInfo = function () {
  console.log("Candidat's Informations:");
  console.log("Last name : " + this.lastname);
  console.log("First name : " + this.firstname);
  console.log("Email : " + this.email);
}

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Candidat', CandidatSchema);
