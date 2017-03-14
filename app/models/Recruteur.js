// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Recruteur', {
	first_name : {type : String, default: ''},
	last_name : {type : String, default: ''},
	age : {type : Number, default: 18}
});
