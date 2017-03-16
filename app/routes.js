// Node packages ==============================================
var passwordHash = require('password-hash');
// DB Models ==================================================
var Candidat = require('./models/Candidat.js');
var Recruteur = require('./models/Recruteur.js');

// Look for account with same email in both candidats and recruteurs collections
// hacked witch callback for synch
function lookForEmail(usr, res, callback)
{
    console.log('Looking for email into collections');
    var Account;
    if (usr.accounttype === 'candidat') {
        console.log('Looking for Candidat');
        Account = Candidat;
    }
    else {
        console.log('Looking for Recruteur');
        Account = Recruteur;
    }
    Account.findOne({ email : usr.email}, function(err, thing)
    {       
        callback(err, thing, usr, res);
    });
}

// callback to complete getCandidatWithEmail
// enforce synchronization
// if email found previously redirect to signin
// else save data and go to login
function signCheck(err, thing, usr, res) {
    console.log('Checking signin');
    if(thing){
        console.log('Email already found in db');
        res.redirect('/signin');
    }
    else {
        console.log("Saving new user in db");
        if (usr.accounttype === 'candidat'){
            new Candidat(usr).save();
        }
        else{
            new Recruteur(usr).save();
        }
        res.redirect('/login');
    }
}

function lookForAccount(usrmail, pw, response) {
    console.log('Looking for account with email');
    console.log('Looking into Candidats...');
    Candidat.findOne({ email : usrmail}, function(err, thing)
    {       
        getAccount(err, thing, pw, response);
    });
    console.log('Looking into Recruteurs...');
    Recruteur.findOne({ email : usrmail}, function(err, thing)
    {       
        getAccount(err, thing, pw, response);
    });
}

function myDispatcher(myObject, res) {
    if(myObject.isPwOK){
        if(myObject.type === 'candidat'){
            res.redirect('/candidat');
        }
        else{
            res.redirect('recruteur');
        }
    }
    else{
        res.redirect('/login');
    }
}

function getAccount(err, thing, pw, response) {
    console.log('Getting Account');
    if(thing){
        myDispatcher({'type':thing.accounttype, 'isPwOK':thing.password === pw}, response);
    }
}

function isPasswordCorrect(user, response) {
    console.log("Verifying account for login");
    var check;
    lookForAccount(user.email, user.password, response);
}

module.exports = function(app, db) {

	// server routes ===========================================================
	// signin routes
	app.post('/signin', function(req, res) {
        console.log("Signin POST request");
        var  formRes = req.body;
        console.log('POST body:');
        console.log(formRes);
        lookForEmail(formRes, res, signCheck);
    });
	// authentication routes
	app.post('/login', function(req, res) {
        console.log("Login POST request");
        var  formRes = req.body;
        isPasswordCorrect(formRes, res);
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
