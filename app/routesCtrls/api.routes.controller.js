var APIKey = require('../models/APIKey');

module.exports = function(apiKey, req, res, callback) {
    APIKey.findOne({ 'key': apiKey }, function(err, thing) {
        if (err) {
            console.log(err);
            response.redirect('/');
        } else {
            if (thing) {
                console.log("API Key match !");
                callback(req, res);
            } else {
                console.log("No API Key matched");
                res.send("No API KEy matching");
            }
        }
    });
}