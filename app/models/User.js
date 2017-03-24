var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;

module.exports = new Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accounttype: String
}, { collection : 'users' });