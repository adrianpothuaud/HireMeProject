// grab the mongoose module
var mongoose = require('mongoose');
var CandidatSchema = require('./CandidatSchema.js');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Candidat', CandidatSchema);
