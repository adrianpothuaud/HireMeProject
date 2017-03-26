// Provide routes specificly for API GET requests for Experience Schema

// DB Models ==================================
var Experience = require('../../../models/Experience');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Connaissances ========================================================================
    // get a list of all connaissances
    app.get('/api:key/experiences', function(req, res) {
        verifyAPIKey(req.params.key, res);
        console.log("experiences");
        Experience.find(function(err, thing) {
            if (err) {
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints all experiences in json format to the response page
        });
    });
    // get 1-experience informations by id
    app.get('/api:key/experience:id', function(req, res) {
        verifyAPIKey(req.params.key, res);
        console.log("experience with id " + req.params.id);
        Experience.findOne({ _id: req.params.id }, function(err, thing) {
            if (err) {
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints experience infos in json format to the response page
        });
    });
};