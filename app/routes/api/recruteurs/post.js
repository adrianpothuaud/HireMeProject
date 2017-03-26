// Provide routes specificly for API POST requests for Recruteur Schema

// DB Models ==================================
var Recruteur = require('../../../models/Recruteur.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Recruteur ========================================================================
    // add a Recruteur
    app.post('/api:key/recruteurs', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : add a Recruteur to the DB
            var usr = req.body;
            if (usr.lastname && usr.firstname && usr.email && usr.password) {
                usr.accountType = "recruteur";
                var newUser = new Recruteur(usr);
                newUser.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        console.log("Recruteur added to DB");
                        res.json(newUser);
                    }
                });
            } else {
                console.log("Required attribute(s) not found");
                res.send("Required attribute(s) not found");
            }
        });
    });
    // update 1-Recruteur informations by id

    // update 1-Recruteur informations by email

};