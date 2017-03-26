var APIKey = require('../models/APIKey');

module.exports = function(apiKey, response) {
    APIKey.findOne({ 'key': apiKey }, function(err, thing) {
        if (err) {
            console.log(err);
            response.redirect('/');
        } else {
            console.log("API Key match !");
        }
    });
}