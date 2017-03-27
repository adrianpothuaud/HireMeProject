var APIKey = require('../models/APIKey');

module.exports = function(apiKey, req, res, callback) {
    APIKey.findOne({ 'key': apiKey }, function(err, thing) {
        if (err) {
            console.log(err);
            response.redirect('/');
        } else {
            if (thing) {
                callback(req, res);
            } else {
                res.send("No API KEy matching");
            }
        }
    });
}