// Provide routes specificly for API DELETE requests for Event Schema

// DB Models ==================================
var Event = require('../../../models/Event.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Event ========================================================================
    // delete a Event
    app.delete('/api:key/events/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and delete a Event
            Event.remove({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            })
        });
    });
};