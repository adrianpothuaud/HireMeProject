// Provide routes specificly for API POST requests for Candidat Schema

// DB Models ==================================
var Candidat = require('../../../models/Candidat.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CANDIDATS ========================================================================
    // add a candidat
    app.post('/api:key/candidats', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : add a Candidat to the DB
            var usr = req.body;
            if (usr.lastname && usr.firstname && usr.email && usr.password) {
                usr.accountType = "candidat";
                var newUser = new Candidat(usr);
                newUser.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        console.log("Candidat added to DB");
                        res.json(newUser);
                    }
                });
            } else {
                console.log("Required attribute(s) not found");
                res.send("Required attribute(s) not found");
            }
        });
    });
};