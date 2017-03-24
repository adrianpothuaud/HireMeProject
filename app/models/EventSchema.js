var mongoose = require('mongoose');
var RecruteurSchema = require('./RecruteurSchema.js');

var EventSchema = mongoose.Schema({
	name : {type : String, default: ''},
	description : {type : String, default: ''},
    dateBegin : {type : Date},
    dateEnd : {type : Date},
    recruteur : RecruteurSchema
}, {collection: "events"});

EventSchema.methods.getName = function () {
    return this.name;
}

EventSchema.methods.getDescription = function () {
    return this.description;
}

EventSchema.methods.getDateBegin = function () {
    return this.dateBegin;
}

EventSchema.methods.getDateEnd = function () {
    return this.dateEnd;
}

EventSchema.methods.getRecruteur = function () {
    return this.recruteur;
}

EventSchema.methods.setName = function (n) {
    this.name = n;
}

EventSchema.methods.setDescription = function (n) {
    this.description = n;
}

EventSchema.methods.setDateBegin = function (n) {
    this.dateBegin = n;
}

EventSchema.methods.setDateEnd = function (n) {
    this.dateEnd = n;
}

EventSchema.methods.setRecruteur = function (n) {
    this.recruteur = n;
}

EventSchema.methods.isOnGoing = function () {
    var now = new Date();
    return (this.dateBegin <= now && now <= this.dateEnd);
}

module.exports = EventSchema;