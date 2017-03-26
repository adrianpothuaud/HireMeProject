// Provide routes specificly for API GET requests for Connaissance Schema

// DB Models ==================================
var Connaissance = require('../../../models/Connaissance.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Connaissances ========================================================================
    // get a list of all connaissances
    app.get('/api:key/connaissances', function(req, res) {
        verifyAPIKey(req.params.key, res);
        console.log("connaissances");
        Connaissance.find(function(err, thing) {
            if (err) {
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints all connaissances in json format to the response page
        });
    });
    // get 1-connaissance informations by id
    app.get('/api:key/connaissance:id', function(req, res) {
        verifyAPIKey(req.params.key, res);
        console.log("connaissance with id " + req.params.id);
        Connaissance.findOne({ _id: req.params.id }, function(err, thing) {
            if (err) {
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints connaissance infos in json format to the response page
        });
    });
};