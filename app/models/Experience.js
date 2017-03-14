// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Candidat', {
	job_name : {type : String, default: ''},
	enterprise_name : {type : String, default: ''},
	duration : {type : Number, default: 0}
});
