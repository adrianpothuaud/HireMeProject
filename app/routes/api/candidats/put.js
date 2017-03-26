// Provide routes specificly for API PUT requests for Candidat Schema

// DB Models ==================================
var Candidat = require('../../../models/Candidat.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CANDIDATS ========================================================================
    // update a candidat
    app.put('/api:key/candidats/:candidat_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and update a Candidat
            Candidat.findOne({ _id: req.params.candidat_id }, function(err, thing) {
                if (err) res.send(err);
                thing.lastname = req.body.lastname;
                thing.firstname = req.body.firstname;
                thing.email = req.body.email;
                // thing.password = req.body.password;
                thing.save(function(err) {
                    if (err) res.Send(err);
                    res.json({ message: 'Candidat updated!' });
                })
            })
        });
    });
};