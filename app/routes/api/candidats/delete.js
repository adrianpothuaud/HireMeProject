// Provide routes specificly for API DELETE requests for Candidat Schema

// DB Models ==================================
var Candidat = require('../../../models/Candidat.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CANDIDATS ========================================================================
    // delete a candidat
    app.delete('/api:key/candidats/:candidat_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and delete a Candidat
            Candidat.remove({ _id: req.params.candidat_id }, function(err, thing) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            })
        });
    });
};