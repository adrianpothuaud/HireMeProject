// Provide routes specificly for API PUT requests for Connaissance Schema

// DB Models ==================================
var Connaissance = require('../../../models/Connaissance.js');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CONNAISSANCES ========================================================================
    // update a connaissance
    app.put('/api:key/connaissances/:con_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and update a connaissance
            Connaissance.findOne({ _id: req.params.con_id }, function(err, thing) {
                if (err) res.send(err);
                thing.name = req.body.name;
                if (req.body.level) {
                    thing.level = req.body.level;
                }
                thing.save(function(err) {
                    if (err) res.Send(err);
                    res.json({ message: 'Connaissance updated!' });
                })
            })
        });
    });
};