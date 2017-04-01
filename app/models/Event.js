// MongoDB Schema for Event object

// Dependencies ================================================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var EventSchema = mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    dateBegin: { type: Date },
    dateEnd: { type: Date },
    enterpriseName: String,
    recruteurs: [{
        email: String
    }],
    connaissancesRequises: [{
        name: String
    }],
    experiencesRequises: [{
        jobName: String,
        duration: Number
    }]
}, { collection: "events" });

// Export ===================
module.exports = mongoose.model('Event', EventSchema);