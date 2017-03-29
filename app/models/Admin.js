// exports mongoDB Admin Model

// Dependencies ============================
var mongoose = require('mongoose')
var AdminSchema = require('./AdminSchema.js')

// Export ===========================================
module.exports = mongoose.model('Admin', AdminSchema)