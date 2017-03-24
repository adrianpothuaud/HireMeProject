var mongoose = require('mongoose');

var ExperienceSchema = mongoose.Schema({
	jobName : {type : String, default: ''},
	enterpriseName : {type : String, default: ''},
	dateBegin : {type : Date, default: undefined},
    dateEnd : {type : Date, default: undefined}
}, {collection: "experiences"});

ExperienceSchema.methods.getJobName = function () {
    return this.jobName;
}

ExperienceSchema.methods.getEnterpriseName = function () {
    return this.enterpriseName;
}

ExperienceSchema.methods.getDateBegin = function () {
    return this.dateBegin;
}

ExperienceSchema.methods.getDateEnd = function () {
    return this.dateEnd;
}

ExperienceSchema.methods.setJobName = function (n) {
    this.jobName = n;
}
ExperienceSchema.methods.setEnterpriseName = function (n) {
    this.enterpriseName = n;
}
ExperienceSchema.methods.setDateBegin = function (n) {
    this.dateBegin = n;
}
ExperienceSchema.methods.setDateEnd = function (n) {
    this.dateEnd = n;
}

ExperienceSchema.methods.isOnGoing = function () {
    var now = new Date();
    return (this.dateBegin <= now && now <= this.dateEnd);
}

module.exports = ExperienceSchema;