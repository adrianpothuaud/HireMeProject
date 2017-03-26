// Provide routes specificly for API GET requests for Candidat Schema

// DB Models ==================================
var Candidat = require('../../../models/Candidat.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CANDIDATS ========================================================================
    // get a list of all candidats
    app.get('/api:key/candidats', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : hide password
            console.log("candidats");
            Candidat.find(function(err, thing) {
                if (err) {
                    console.log(err);
                }
                console.log(thing);
                res.json(thing); // prints all candidats in json format to the response page
            });
        });
    });
    // get 1-candidat informations by id
    app.get('/api:key/candidats/:candidat_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            console.log("candidat with id " + req.params.candidat_id);
            Candidat.findOne({ _id: req.params.candidat_id }, function(err, thing) {
                if (err) {
                    console.log(err);
                }
                console.log(thing);
                res.json(thing); // prints candidat infos in json format to the response page
            });
        });
    });
};