var mongoose = require('mongoose');
var RecruteurSchema = require('./RecruteurSchema.js');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Recruteur', RecruteurSchema);
