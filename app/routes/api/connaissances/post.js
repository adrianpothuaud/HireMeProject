// Provide routes specificly for API POST requests for Connaissance Schema

// DB Models ==================================
var Connaissance = require('../../../models/Connaissance');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // Connaissances ========================================================================
    // add a connaissance
    app.post('/api:key/connaissances', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : add a Connaissance to the DB
            var con = req.body;
            if (con.name) {
                var newCon = new Connaissance(con);
                newCon.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.json(newCon);
                    }
                });
            } else {
                console.log("Required attribute(s) not found");
                res.send("Required attribute(s) not found");
            }
        });
    });
};