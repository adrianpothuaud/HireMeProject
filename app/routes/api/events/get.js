// Provide routes specificly for API GET requests for Event Schema

// DB Models ==================================
var Event = require('../../../models/Event.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Event ========================================================================
    // get a list of all Events
    app.get('/api:key/events', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            Event.find(function(err, thing) {
                if (err) {
                    console.log(err);
                }
                res.json(thing); // prints all events in json format to the response page
            });
        });
    });
    // get 1-event informations by id
    app.get('/api:key/events/:ev_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            Event.findOne({ _id: req.params.ev_id }, function(err, thing) {
                if (err) {
                    console.log(err);
                }
                thing.onGoing = thing.isOnGoing();
                res.json(thing); // prints event infos in json format to the response page
            });
        });
    });
};