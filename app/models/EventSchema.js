// MongoDB Schema for Event object

// Dependencies ================================================
var mongoose = require('mongoose');
var RecruteurSchema = require('./RecruteurSchema.js');

// Basic Schema with attributes and collection spec
var EventSchema = mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    dateBegin: { type: Date },
    dateEnd: { type: Date },
    enterpriseName: String,
    recruteurs: [RecruteurSchema]
}, { collection: "events" });

// Schema's methods =================================
// Getters ==========================================
EventSchema.methods.getName = function() {
    return this.name;
}
EventSchema.methods.getDescription = function() {
    return this.description;
}
EventSchema.methods.getDateBegin = function() {
    return this.dateBegin;
}
EventSchema.methods.getDateEnd = function() {
    return this.dateEnd;
}
EventSchema.methods.getRecruteurs = function() {
        return this.recruteurs;
    }
    // Setters ==========================================
EventSchema.methods.setName = function(n) {
    this.name = n;
}
EventSchema.methods.setDescription = function(n) {
    this.description = n;
}
EventSchema.methods.setDateBegin = function(n) {
    this.dateBegin = n;
}
EventSchema.methods.setDateEnd = function(n) {
    this.dateEnd = n;
}
EventSchema.methods.setRecruteurs = function(n) {
        this.recruteurs = n;
    }
    // Facilities =====================================
    // Add/Remove a recruteur from recruteurs list
EventSchema.methods.addRecruteur = function(n) {
    //ToDo
}
EventSchema.methods.removeRecruteur = function(n) {
        //ToDo
    }
    // Is event on going or not ? returns True/False
EventSchema.methods.isOnGoing = function() {
    var now = new Date();
    return (this.dateBegin <= now && now <= this.dateEnd);
}

// Export ===================
module.exports = EventSchema;