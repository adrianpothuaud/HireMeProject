// Define http routes for our application

// Dependencies ==============================================
var passwordHash = require('password-hash');
// DB Models =================================================
var Candidat = require('./models/Candidat.js');
var Recruteur = require('./models/Recruteur.js');
var session = require('express-session');

// ToDo 
// modules for all routes
// comments
// improvements
// make DB actions within the API

// Look for account with same email in both candidats and recruteurs collections
// hacked witch callback for synch
function lookForEmail(usr, res, callback) {
    console.log('Looking for email into collections');
    var Account;
    if (usr.accountType === 'candidat') {
        console.log('Looking for Candidat');
        Account = Candidat;
    } else if (usr.accountType === 'recruteur') {
        console.log('Looking for Recruteur');
        Account = Recruteur;
    } else {
        console.log("ERROR Undefined accountType");
    }
    Account.findOne({ email: usr.email }, function(err, thing) {
        callback(err, thing, usr, res);
    });
}

// callback to complete getCandidatWithEmail
// enforce synchronization
// if email found previously redirect to signin
// else save data and go to login
function signCheck(err, thing, usr, res) {
    console.log('Checking signin');
    if (thing) {
        console.log('Email already found in db');
        res.redirect('/signin');
    } else {
        console.log("Saving new user in db");
        if (usr.accountType === "candidat") {
            usr.experiences = new Array();
            usr.connaissances = new Array();

            console.log("usr : ");
            console.log(usr);

            newUsr = new Candidat(usr);

            console.log("New Candidat : ");
            console.log(newUsr);
            newUsr.save();
            res.redirect('/login');
        } else if (usr.accountType === "recruteur") {
            usr.enterprisename = undefined;

            console.log("usr : ");
            console.log(usr);

            newUsr = new Recruteur(usr);

            console.log("New Recruteur : ");
            console.log(newUsr);
            newUsr.save();
            res.redirect('/login');
        } else {
            console.log("Problem incompatible accountType");
            res.redirect("/signin");
        }

    }
}

function lookForAccount(usrmail, pw, request, response) {
    console.log('Looking for account with email');
    console.log('Looking into Candidats...');
    Candidat.findOne({ email: usrmail }, function(err, thing) {
        if (thing) {
            getAccount(err, thing, pw, request, response);
        } else {
            console.log('Looking into Recruteurs...');
            Recruteur.findOne({ email: usrmail }, function(err, thing) {
                getAccount(err, thing, pw, request, response);
            });
        }
    });
}

function myDispatcher(myObject, request, res) {

    var sess

    if (request.session) sess = request.session;
    else sess = new Object();

    sess._id = myObject.user._id;

    console.log("Session with _id : " + sess._id);

    if (myObject.type === 'candidat') {
        console.log("Dispatching to candidat home page");
        res.redirect('/candidat');
    } else {
        console.log("Dispatching to recruteur home page");
        res.redirect('/recruteur');
    }
}

function getAccount(err, thing, pw, request, response) {
    console.log('Getting Account');
    if (thing) {
        console.log("Dispatching...");
        myDispatcher({ 'type': thing.accountType, 'isPwOK': thing.password === pw, 'user': thing }, request, response);
    } else {
        console.log("user is undefined");
        response.sendFile('index.html', { root: "public" });
    }
}

function isPasswordCorrect(user, request, response) {
    console.log("Verifying account for login");
    lookForAccount(user.email, user.password, request, response);
}

module.exports = function(app, db) {

    app.get('/', function(req, res) {
        console.log("GET request in  '/' ...");
        res.sendFile('index.html', { root: "public" });
    });

    app.get('/home', function(req, res) {
        console.log("GET request in home page...");
        res.sendFile('index.html', { root: "public" });
    });

    app.get('/about', function(req, res) {
        console.log("GET request in about page...");
        res.sendFile('index.html', { root: "public" });
    });

    // server routes ===========================================================
    // signin routes
    app.get('/signin', function(req, res) {
        console.log("GET request in signin page...");
        res.sendFile('index.html', { root: "public" });
    });
    app.post('/signin', function(req, res) {
        console.log("Signin POST request");
        var formRes = req.body;
        console.log('POST body:');
        console.log(formRes);
        lookForEmail(formRes, res, signCheck);
    });
    // authentication routes
    app.get('/login', function(request, response) {
        console.log("GET request in login page...");
        response.sendFile('index.html', { root: "public" });
    });
    app.post('/login', function(req, res) {
        console.log("Login POST request");
        var formRes = req.body;
        isPasswordCorrect(formRes, req, res);
    });

    app.get('/candidat', function(req, res) {
        if (req.session) {
            console.log("GET request in candidat page...");
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access candidat home page..");
            res.redirect("/home");
        }
    });
    app.get('/recruteur', function(req, res) {
        if (req.session) {
            console.log("GET request in recuteur page...");
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur home page..");
            res.redirect("/home");
        }
    });

    app.get('/candidat/profile', function(req, res) {
        if (req.session) {
            console.log("GET request in candidat profile page...");
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access candidat profile page..");
            res.redirect("/home");
        }
    });
    app.get('/recruteur/profile', function(req, res) {
        if (req.session) {
            console.log("GET request in recruteur profile page...");
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur profile page..");
            res.redirect("/home");
        }
    });
    app.get('/event/createform', function(req, res) {
        if (req.session) {
            console.log("GET request in recruteur event creation page...");
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur event creation page..");
            res.redirect("/home");
        }
    });

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Session killed !");
                res.redirect('/');
            }
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests disabled to enable API calls
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html');
    // });

    // API calls ===============================================================
    // candidats
    require('./routes/api/candidats/get.js')(app, db); // GET methods
    require('./routes/api/candidats/post.js')(app, db); // POST methods
    require('./routes/api/candidats/put.js')(app, db); // PUT methods
    require('./routes/api/candidats/delete.js')(app, db); // DELETE methods
    // recruteurs
    require('./routes/api/recruteurs/get.js')(app, db); // GET methods
    require('./routes/api/recruteurs/post.js')(app, db); // POST methods
    require('./routes/api/recruteurs/put.js')(app, db); // PUT methods
    require('./routes/api/recruteurs/delete.js')(app, db); // DELETE methods
    // events
    require('./routes/api/events/get.js')(app, db); // GET methods
    require('./routes/api/events/post.js')(app, db); // POST methods
    require('./routes/api/events/put.js')(app, db); // PUT methods
    require('./routes/api/events/delete.js')(app, db); // DELETE methods
    // connaissances
    require('./routes/api/connaissances/get.js')(app, db); // GET methods
    require('./routes/api/connaissances/post.js')(app, db); // POST methods
    require('./routes/api/connaissances/put.js')(app, db); // PUT methods
    require('./routes/api/connaissances/delete.js')(app, db); // DELETE methods
    // experiences
    require('./routes/api/experiences/get.js')(app, db); // GET methods
    require('./routes/api/experiences/post.js')(app, db); // POST methods
    require('./routes/api/experiences/put.js')(app, db); // PUT methods
    require('./routes/api/experiences/delete.js')(app, db); // DELETE methods

};