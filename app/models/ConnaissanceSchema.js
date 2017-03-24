var mongoose = require('mongoose');

var ConnaissanceSchema = mongoose.Schema({
	name : {type : String, default: ''},
	level : {type : String, default: ''}
}, {collection: "connaissances"});

ConnaissanceSchema.methods.getName = function () {
    return this.name;
}

ConnaissanceSchema.methods.getLevel = function () {
    return this.level;
}

module.exports = ConnaissanceSchema;