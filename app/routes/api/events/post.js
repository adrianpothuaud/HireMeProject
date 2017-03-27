// Provide routes specificly for API POST requests for Event Schema

// DB Models ==================================
var Event = require('../../../models/Event');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Events ========================================================================
    // add an event
    app.post('/api:key/events', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : add a Event to the DB
            var event = req.body;
            if (event.name && event.description) {
                var newEvent = new Event(event);
                newEvent.dateBegin = new Date();
                newEvent.dateEnd = new Date(newEvent.dateBegin.getTime() + 30 * 24 * 60 * 60000); // default 30 days event
                newEvent.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.json(newEvent);
                    }
                });
            } else {
                console.log("Required attribute(s) not found");
                res.send("Required attribute(s) not found");
            }
        });
    });
};