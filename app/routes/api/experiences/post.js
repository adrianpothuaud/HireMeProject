// Provide routes specificly for API POST requests for Experience Schema

// DB Models ==================================
var Experience = require('../../../models/Experience');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Experience ========================================================================
    // add an Experience
    app.post('/api:key/experiences', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : add a Experience to the DB
            var exp = req.body;
            if (exp.jobName) {
                var newExp = new Experience(exp);
                newExp.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        console.log("newExp added to DB");
                        res.json(newExp);
                    }
                });
            } else {
                console.log("Required attribute(s) not found");
                res.send("Required attribute(s) not found");
            }
        });
    });
};