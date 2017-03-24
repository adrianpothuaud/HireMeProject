var mongoose = require('mongoose');
var AdminSchema = require('./AdminSchema.js')

module.exports = mongoose.model('Admin', AdminSchema);