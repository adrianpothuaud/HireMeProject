// Provide routes specificly for API GET requests for Candidat Schema

// DB Models ==================================
var Candidat = require('../../../models/Candidat.js');

// Exported API calls ========================================================
module.exports = function(app, db) {
    // CANDIDATS ========================================================================
	// get a list of all candidats
    app.get('/api/candidats', function(req, res) {
        // ToDo : hide password
        console.log("candidats");
        Candidat.find(function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints all candidats in json format to the response page
        });
    });
    // get 1-candidat informations by id
    app.get('/api/candidat:id', function(req, res) {
        console.log("candidat with id " + req.params.id);
        Candidat.findOne({ _id : req.params.id}, function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints candidat infos in json format to the response page
        });
    });
    // get 1-candidat informations by email
    app.get('/api/candidat/byemail:email', function(req, res) {
        console.log("candidat with email " + req.params.email);
        Candidat.findOne({ email : req.params.email}, function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing); // prints candidat infos in json format to the response page
        });
    });
};