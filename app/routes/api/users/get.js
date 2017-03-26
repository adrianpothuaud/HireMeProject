// Provide routes specificly for API GET requests for User Schema

// DB Models ==================================
var User = require('../../../models/User.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // User ========================================================================
    // get a list of all User
    app.get('/api:key/users', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            console.log("users");
            User.find(function(err, thing) {
                if (err) {
                    console.log(err);
                }
                console.log(thing);
                res.json(thing); // prints all users in json format to the response page
            });
        });
    });
    // get 1-user informations by id
    app.get('/api:key/user:id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            console.log("user with id " + req.params.id);
            User.findOne({ _id: req.params.id }, function(err, thing) {
                if (err) {
                    console.log(err);
                }
                thing.onGoing = thing.isOnGoing();
                console.log(thing);
                res.json(thing); // prints event infos in json format to the response page
            });
        });
    });
};