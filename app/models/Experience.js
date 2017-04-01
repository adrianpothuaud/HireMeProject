// MongoDB Schema for Experience Object

// Dependencies ================================================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var ExperienceSchema = mongoose.Schema({
    jobName: { type: String, required: true, unique: true },
    description: String
}, { collection: "experiences" });

// Facilities ===========================================
ExperienceSchema.methods.isOnGoing = function() {
    var now = new Date();
    return (this.dateBegin <= now && now <= this.dateEnd);
}

// Export =====================
module.exports = mongoose.model('Experience', ExperienceSchema);