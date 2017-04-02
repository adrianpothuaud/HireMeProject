// Define http routes for our application
// Dependencies ==============================================
var passwordHash = require('password-hash');
// DB Models =================================================
var Candidat = require('./models/Candidat.js');
var Recruteur = require('./models/Recruteur.js');
var Event = require('./models/Event.js');
var session = require('express-session');

var sess

module.exports = function(app, db) {
    // server routes ===========================================================
    // signin routes
    app.post('/signin', function(req, res) {
        var formRes = req.body;
        // lookForEmail(formRes, res, signCheck);
        // look for email
        Candidat.findOne({ "email": req.body.email }, function(err, thing) {
            if (err) console.log(err)
            if (!thing) {
                console.log('no user matching in Candidats...')
                Recruteur.findOne({ 'email': req.body.email }, function(err, thin) {
                    if (err) console.log(err)
                    if (!thing) {
                        console.log('no user matching in Recruteurs...')
                            // register new user
                            // ...
                        var newUser
                        if (req.body.accountType === 'candidat') {
                            newUser = new Candidat()
                            newUser.lastname = req.body.lastname
                            newUser.firstname = req.body.firstname
                            newUser.email = req.body.email
                            newUser.accountType = req.body.accountType
                            newUser.password = req.body.password
                            newUser.save(function(err) {
                                if (err) console.log(err)
                                console.log('Candidat registered successfuly')
                                res.redirect('/login')
                            })
                        } else if (req.body.accountType === 'recruteur') {
                            newUser = new Recruteur()
                            newUser.lastname = req.body.lastname
                            newUser.firstname = req.body.firstname
                            newUser.email = req.body.email
                            newUser.accountType = req.body.accountType
                            newUser.password = req.body.password
                            newUser.save(function(err) {
                                if (err) console.log(err)
                                console.log('Recruteur registered successfuly')
                                res.redirect('/login')
                            })
                        } else {
                            console.log('account type is not valid...')
                            res.redirect('/signin')
                        }
                    } else {
                        console.log('user already exists in Recruteurs')
                        res.redirect('/signin')
                    }
                })
            } else {
                console.log('user already exists in Candidats')
                res.redirect('/signin')
            }
        })
    });
    // authentication routes
    app.post('/login', function(req, res) {
        var formRes = req.body;
        console.log("Trying to login with infos : " + req.body.email + " , " + req.body.password)
            // isPasswordCorrect(formRes, req, res);
        Candidat.findOne({ 'email': req.body.email }, function(err, thing) {
            if (err) console.log(err)
            if (!thing) {
                console.log("user not found in Candidats")
                Recruteur.findOne({ 'email': req.body.email }, function(err, thing) {
                    if (err) console.log(err)
                    if (!thing) {
                        console.log("user not found in Recruteurs")
                        res.redirect('/login')
                    } else {
                        console.log("user found in Recruteurs")
                        if (thing.password === req.body.password) {
                            console.log("password match")
                            res.redirect('/recruteur?id=' + thing._id)
                        } else {
                            console.log("password is not correct")
                            res.redirect('/login')
                        }
                    }
                })
            } else {
                console.log("user found in Candidats")
                if (thing.password === req.body.password) {
                    console.log("password match")
                    res.redirect('/candidat?id=' + thing._id)
                } else {
                    console.log("password is not correct")
                    res.redirect('/login')
                }
            }
        })
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