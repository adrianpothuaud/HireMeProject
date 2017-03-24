// grab the mongoose module
var mongoose = require('mongoose');
var EventSchema = require('./EventSchema.js');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Event', EventSchema);
