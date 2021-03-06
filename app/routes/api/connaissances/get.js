// Provide routes specificly for API GET requests for Connaissance Schema

// DB Models ==================================
var Connaissance = require('../../../models/Connaissance.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Connaissances ========================================================================
    // get a list of all connaissances
    app.get('/api:key/connaissances', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            Connaissance.find(function(err, thing) {
                if (err) {
                    console.log(err);
                }
                res.json(thing); // prints all connaissances in json format to the response page
            });
        });
    });
    // get 1-connaissance informations by id
    app.get('/api:key/connaissances/:con_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            Connaissance.findOne({ _id: req.params.con_id }, function(err, thing) {
                if (err) {
                    console.log(err);
                }
                res.json(thing); // prints connaissance infos in json format to the response page
            });
        });
    });
};