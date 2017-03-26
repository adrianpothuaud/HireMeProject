// Provide routes specificly for API DELETE requests for Recruteur Schema

// DB Models ==================================
var Recruteur = require('../../../models/Recruteur.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Recruteur ========================================================================
    // delete a Recruteur
    app.delete('/api:key/recruteurs/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and delete a Recruteur
            Recruteur.remove({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            })
        });
    });
};