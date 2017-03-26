// Provide routes specificly for API PUT requests for Experience Schema

// DB Models ==================================
var Experience = require('../../../models/Experience');
var verifyAPIKey = require('../../../routesCtrls/api.routes.controller');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // EXPERIENCES ========================================================================
    // update an Experience
    app.put('/api:key/experiences/:_id', function(req, res) {
        verifyAPIKey(req.params.key, req, res, function(req, res) {
            // ToDo : find and update an experience
            Experience.findOne({ _id: req.params._id }, function(err, thing) {
                if (err) res.send(err);
                if (req.body.jobName) thing.jobName = req.body.jobName;
                if (req.body.enterpriseName) thing.enterpriseName = req.body.enterpriseName;
                if (req.body.dateBegin) thing.dateBegin = req.body.dateBegin;
                if (req.body.dateEnd) thing.dateEnd = req.body.dateEnd;
                thing.save(function(err) {
                    if (err) res.send(err);
                    res.json({ message: 'Experience updated!' });
                })
            })
        });
    });
};