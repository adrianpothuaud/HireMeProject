var passwordHash = require('password-hash');
var Candidat = require('./models/Candidat.js');
var Recruteur = require('./models/Recruteur.js');

module.exports = function(app) {

	// server routes ===========================================================
	// signin routes
	app.post('/signin', function(req, res) {
        console.log("Signin POST request");
        var  formRes = req.body;
        formRes.password =  passwordHash.generate(formRes.password);
        console.log(formRes);
        var newUser;
        if (formRes.accounttype === "candidat") {
            console.log("Creation of a Candidat");
            newUser = new Candidat(formRes);
        }
        else {
            console.log("Creation of a Recruteur");
            newUser = new Recruteur(formRes);
        }
        newUser.showInfo();
        // verify email not already used
    });
	// authentication routes
	app.post('/login', function(req, res) {
        console.log("Login POST request");
        var  userToVerify = req.body;
        userToVerify.password =  passwordHash.generate(userToVerify.password);
        console.log(userToVerify);
        // verify user in db and pw match
        // get user account type
        // redirect to candidat or recruteur
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	// API calls ===============================================================
	// candidats
    app.get('/candidats', function(req, res) {
        res.JSON(); // returns all candidats list
    });
    app.post('/candidats', function(req, res) {
        // add data to candidats in db
    });
    app.get('/candidat:cid', function(req, res) {
        res.JSON(); // returns candidat with ID informations
    });
    app.delete('/candidat:cid', function(req, res) {
        // delete candidat from db
    });

    // recruteurs
    app.get('/recruteurs', function(req, res) {
        res.JSON(); // returns all recruteurs list
    });
    app.post('/recruteurs', function(req, res) {
        // add data to recruteurs in db
    });
    app.get('/recruteur:rid', function(req, res) {
        res.JSON(); // returns recruteur with ID informations
    });
    app.delete('/recruteur:rid', function(req, res) {
        // delete recruteur from db
    });
};
