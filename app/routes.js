// Define http routes for our application
// Dependencies ==============================================
var passwordHash = require('password-hash');
// DB Models =================================================
var Candidat = require('./models/Candidat.js');
var Recruteur = require('./models/Recruteur.js');
var Event = require('./models/Event.js');
var session = require('express-session');

var sess

// Look for account with same email in both candidats and recruteurs collections
// hacked witch callback for synch
function lookForEmail(usr, res, callback) {
    var Account;
    if (usr.accountType === 'candidat') {
        Account = Candidat;
    } else if (usr.accountType === 'recruteur') {
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
    if (thing) {
        res.redirect('/signin');
    } else {
        if (usr.accountType === "candidat") {
            usr.experiences = new Array();
            usr.connaissances = new Array();
            newUsr = new Candidat(usr);
            newUsr.save();
            res.redirect('/login');
        } else if (usr.accountType === "recruteur") {
            usr.enterprisename = undefined;
            newUsr = new Recruteur(usr);
            newUsr.save();
            res.redirect('/login');
        } else {
            console.log("Problem incompatible accountType");
            res.redirect("/signin");
        }
    }
}

function lookForAccount(usrmail, pw, request, response) {
    console.log("Trying to find one user that match " + usrmail + "...")
    Candidat.findOne({ email: usrmail }, function(err, thing) {
        if (thing) {
            console.log("Thing found in Candidat")
            getAccount(err, thing, pw, request, response);
        } else {
            console.log("No user found in Candidat")
        }
    });
    Recruteur.findOne({ email: usrmail }, function(err, thing) {
        if (thing) {
            console.log("Thing found in recruteur")
            getAccount(err, thing, pw, request, response);
        } else {
            console.log("No user found in Recruteur")
        }
    });
}

function myDispatcher(myObject, request, res) {

    if (request.session) sess = request.session;
    else sess = new Object();

    sess._id = myObject.user._id;

    if (myObject.type === 'candidat') {
        res.redirect('/candidat?id=' + sess._id);
    } else {
        res.redirect('/recruteur?id=' + sess._id);
    }
}

function getAccount(err, thing, pw, request, response) {
    console.log("Trying to dispatch  for thing : " + thing)
    if (thing) {
        myDispatcher({ 'type': thing.accountType, 'isPwOK': thing.password === pw, 'user': thing }, request, response);
    } else {
        console.log("user is undefined");
        response.sendFile('index.html', { root: "public" });
    }
}

function isPasswordCorrect(user, request, response) {
    console.log("Looking into accounts...")
    lookForAccount(user.email, user.password, request, response);
}

module.exports = function(app, db) {
    // server routes ===========================================================
    // signin routes
    app.post('/signin', function(req, res) {
        var formRes = req.body;
        lookForEmail(formRes, res, signCheck);
    });
    // authentication routes
    app.post('/login', function(req, res) {
        var formRes = req.body;
        console.log("Trying to login with infos : " + req.body.email + " , " + req.body.password)
        isPasswordCorrect(formRes, req, res);
    });

    // frontend routes =========================================================
    // route to handle all angular requests disabled to enable API calls
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html');
    // });
    app.get('/', function(req, res) {
        res.sendFile('index.html', { root: "public" });
    });
    app.get('/home', function(req, res) {
        res.sendFile('index.html', { root: "public" });
    });
    app.get('/about', function(req, res) {
        res.sendFile('index.html', { root: "public" });
    });
    app.get('/signin', function(req, res) {
        res.sendFile('index.html', { root: "public" });
    });
    app.get('/login', function(request, response) {
        response.sendFile('index.html', { root: "public" });
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
    app.get('/eventView', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            res.redirect("/home");
        }
    });
    app.get('/resetpassword', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            res.redirect("/home");
        }
    });
    app.get('/joinStreamRecruteur', function(req, res) {
        // var io = require('socket.io')
        // io.listen(app)
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            res.redirect("/home");
        }
    });
    app.get('/joinStreamCandidat', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            res.redirect("/home");
        }
    });
    app.get('/candidat', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access candidat home page..");
            res.redirect("/home");
        }
    });
    app.get('/recruteur', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur home page..");
            res.redirect("/home");
        }
    });
    app.get('/candidat/profile', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access candidat profile page..");
            res.redirect("/home");
        }
    });
    app.get('/recruteur/profile', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur profile page..");
            res.redirect("/home");
        }
    });
    app.get('/event/createform', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur event creation page..");
            res.redirect("/home");
        }
    });
    app.get('/event/editform', function(req, res) {
        if (req.session) {
            res.sendFile('index.html', { root: "public" });
        } else {
            console.log("Session not loaded when trying to access recruteur event creation page..");
            res.redirect("/home");
        }
    });

    // FORMS routes ===========================================================
    require('./routes/forms/recruteurs/editprofile.js')(app, db)
    require('./routes/forms/candidats/editprofile.js')(app, db)
    require('./routes/forms/events/createevent.js')(app, db)
    require('./routes/forms/events/editevent.js')(app, db)

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