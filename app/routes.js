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
        if(thing) {
            getAccount(err, thing, pw, response);
        } 
        else {
            console.log('Looking into Recruteurs...');
            Recruteur.findOne({ email : usrmail}, function(err, thing)
            {       
                getAccount(err, thing, pw, response);
            });
        }
    });
}

function myDispatcher(myObject, res) {

    res.session.userId = myObject.user._id;
    res.session.accountType = myObject.type;

    if(myObject.type === 'candidat'){
        res.redirect('/candidat');
    }
    else{
        res.redirect('/recruteur');
    }
}

function getAccount(err, thing, pw, response) {
    console.log('Getting Account');
    if(thing){
        myDispatcher({'type':thing.accountType, 'isPwOK':thing.password === pw, 'user':thing}, response);
    }
    else {
        console.log("user is undefined");
        response.redirect('/login');
    }
}

function isPasswordCorrect(user, response) {
    console.log("Verifying account for login");
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
	// route to handle all angular requests disabled to enable API calls
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html');
	// });

    app.get('/candidat', function(req, res) {
        console.log("Controling acces to candidat home page");
        accountType = req.session.accountType;
        if(!accountType){
            res.redirect('/login');
            console.log("Access not granted to candidat home page");
        }
        else {
            if (!accountType === "candidat"){
                res.redirect('/login');
                console.log("Access not granted to candidat home page for recruteur");
            }
        }
    });

    app.get('/recruteur', function(req, res) {
        console.log("Controling acces to recruteur home page");
        accountType = req.session.accountType;
        if(!accountType){
            res.redirect('/login');
            console.log("Access not granted to recruteur home page");
        }
        else {
            if (!accountType === "recruteur"){
                res.redirect('/login');
                console.log("Access not granted to recruteur home page for candidat");
            }
        }
    });

	// API calls ===============================================================
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
    app.post('/api/candidats', function(req, res) {
        // add data to candidats in db
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

    // recruteurs
    app.get('/api/recruteurs', function(req, res) {
        console.log("recruteurs");
        Recruteur.find(function(err, thing) {
            if(err){
                console.log(err);
            }
            console.log(thing);
            res.json(thing);
        }); // returns all candidats list
    });
    app.post('/api/recruteurs', function(req, res) {
        // add data to recruteurs in db
    });
    app.get('/api/recruteur:id', function(req, res) {
        res.JSON(); // returns recruteur with ID informations
    });
    app.get('/api/recruteur:email', function(req, res) {
        res.JSON(); // returns recruteur with ID informations
    });
    app.delete('/api/recruteur:id', function(req, res) {
        // delete recruteur from db
    });
    app.delete('/api/recruteur:email', function(req, res) {
        // delete recruteur from db
    });
};
