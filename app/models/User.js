var mongoose = require('mongoose');
var UserSchema = require('./UserSchema');

module.exports = mongoose.model('Recruteur', UserSchema);