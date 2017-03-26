// Provide routes specificly for API PUT requests for Event Schema

// DB Models ==================================
var Event = require('../../../models/Event.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // EVENTS ========================================================================
    // update an Event
    app.put('/api:key/events/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and update an event
            Event.findOne({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                if (req.body.name) thing.name = req.body.name;
                if (req.body.description) thing.description = req.body.description;
                if (req.body.dateBegin) thing.dateBegin = req.body.dateBegin;
                if (req.body.dateEnd) thing.dateEnd = req.body.dateEnd;
                thing.save(function(err) {
                    if (err) res.Send(err);
                    res.json({ message: 'Event updated!' });
                })
            })
        });
    });
};