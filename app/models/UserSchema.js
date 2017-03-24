var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({

}, {collection: "users"});

module.exports = UserSchema;