// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var AdminSchema = mongoose.Schema({
    email: String,
    password: String
}, { collection : 'admins'});

// define Admin's methods
// GETTERS
AdminSchema.methods.getEmail = function () {
    return this.email;
}

AdminSchema.methods.getHashedPassword = function () {
    return this.password;
}

// SETTERS
AdminSchema.methods.setEmail = function (n) {
    this.email = n;
}

AdminSchema.methods.setPassword = function (n) {
    // encryption
    this.password = n;
}

module.exports = AdminSchema;