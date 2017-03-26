// Provide routes specificly for API PUT requests for Recruteur Schema

// DB Models ==================================
var Recruteur = require('../../../models/Recruteur');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // RECRUTEURS ========================================================================
    // update a recruteur
    app.put('/api:key/recruteurs/:recruteur_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and update a Recruteur
            Recruteur.findOne({ _id: req.params.recruteur_id }, function(err, thing) {
                if (err) res.send(err);
                if (req.body.lastname) thing.lastname = req.body.lastname;
                if (req.body.firstname) thing.firstname = req.body.firstname;
                if (req.body.email) thing.email = req.body.email;
                if (req.body.password) thing.password = req.body.password;
                thing.save(function(err) {
                    if (err) res.Send(err);
                    res.json({ message: 'Recruteur updated!' });
                })
            })
        });
    });
};