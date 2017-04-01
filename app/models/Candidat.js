// MongoDB Schema for Candidat User

// Dependencies ================================================
var mongoose = require('mongoose');
// var extend = require('mongoose-schema-extend'); // unused yet

// Basic Schema with attributes and collection spec
var CandidatSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    accountType: String,
    experiences: [{
        jobName: String,
        enterpriseName: String,
        dateBegin: Date,
        dateEnd: Date
    }],
    connaissances: [{
        name: String,
        level: String
    }]
}, { collection: 'candidats' });

// Export =====================
module.exports = mongoose.model('Candidat', CandidatSchema);