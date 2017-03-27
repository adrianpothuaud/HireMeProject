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
                if (req.body.lastname) thing.lastname = req.body.lastname;
                if (req.body.firstname) thing.firstname = req.body.firstname;
                if (req.body.email) thing.email = req.body.email;
                if (req.body.accountType) thing.accountType = req.body.accountType;
                if (req.body.password) thing.password = req.body.password;
                // thing.password = req.body.password;
                thing.save(function(err) {
                    if (err) res.Send(err);
                    res.json({ message: 'Candidat updated!' });
                })
            })
        });
    });
};