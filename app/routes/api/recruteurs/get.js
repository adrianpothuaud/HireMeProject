// Provide routes specificly for API GET requests for Recruteur Schema

// DB Models ==================================
var Recruteur = require('../../../models/Recruteur.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // RECRUTEURS ========================================================================
    // get a list of all recruteurs
    app.get('/api:key/recruteurs', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : hide password
            console.log("recruteurs");
            Recruteur.find(function(err, thing) {
                if (err) {
                    console.log(err);
                }
                console.log(thing);
                res.json(thing); // prints all recruteurs in json format to the response page
            });
        });
    });
    // get 1-recruteur informations by id
    app.get('/api:key/recruteurs/:id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            console.log("recruteur with id " + req.params.id);
            Recruteur.findOne({ _id: req.params.id }, function(err, thing) {
                if (err) {
                    console.log(err);
                }
                console.log(thing);
                res.json(thing); // prints recruteur infos in json format to the response page
            });
        });
    });
};