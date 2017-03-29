// MongoDB Schema for Experience Object

// Dependencies ================================================
var mongoose = require('mongoose');

// Basic Schema with attributes and collection spec
var ExperienceSchema = mongoose.Schema({
    jobName: { type: String, required: true, unique: true },
    enterpriseName: { type: String, default: undefined, required: false },
    dateBegin: { type: Date, default: undefined, required: false },
    dateEnd: { type: Date, default: undefined, required: false },
    duree: { type: Number, default: undefined, required: false }
}, { collection: "experiences" });

// Schema's methods =================================
// Getters ==========================================
ExperienceSchema.methods.getJobName = function() {
    return this.jobName;
}
ExperienceSchema.methods.getEnterpriseName = function() {
    return this.enterpriseName;
}
ExperienceSchema.methods.getDateBegin = function() {
    return this.dateBegin;
}
ExperienceSchema.methods.getDateEnd = function() {
        return this.dateEnd;
    }
    // Setters ==========================================
ExperienceSchema.methods.setJobName = function(n) {
    this.jobName = n;
}
ExperienceSchema.methods.setEnterpriseName = function(n) {
    this.enterpriseName = n;
}
ExperienceSchema.methods.setDateBegin = function(n) {
    this.dateBegin = n;
}
ExperienceSchema.methods.setDateEnd = function(n) {
        this.dateEnd = n;
    }
    // Facilities ===========================================
ExperienceSchema.methods.isOnGoing = function() {
    var now = new Date();
    return (this.dateBegin <= now && now <= this.dateEnd);
}

// Export =====================
module.exports = ExperienceSchema;