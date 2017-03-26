// Provide routes specificly for API DELETE requests for Connaissance Schema

// DB Models ==================================
var Connaissance = require('../../../models/Connaissance.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Connaissance ========================================================================
    // delete a connaissance
    app.delete('/api:key/connaissances/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and delete a Connaissance
            Connaissance.remove({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            })
        });
    });
};