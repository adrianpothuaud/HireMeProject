// Provide routes specificly for API DELETE requests for Experience Schema

// DB Models ==================================
var Experience = require('../../../models/Experience.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Experience ========================================================================
    // delete a Experience
    app.delete('/api:key/experiences/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and delete a Experience
            Experience.remove({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            })
        });
    });
};