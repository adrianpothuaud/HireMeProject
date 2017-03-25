// DB Models ==================================================
var Candidat = require('./models/Candidat.js');

// API calls ===============================================================
module.exports = function(app, db) {
	// candidats
    app.get('/api/candidats', function(req, res) {
        console.log("candidats");
        Candidat.find(function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing);
        }); // returns all candidats list
    });
    app.get('/api/candidat:id', function(req, res) {
        console.log("candidat with id " + req.params.id);
        Candidat.findOne({ _id : req.params.id}, function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing);
        }); // returns all candidats list
    });
    app.get('/api/candidat/byemail:email', function(req, res) {
        console.log("candidat with email " + req.params.email);
        Candidat.findOne({ email : req.params.email}, function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing);
        }); // returns all candidats list
    });
};