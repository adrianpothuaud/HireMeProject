module.exports = function(app, db) {
    app.post('/candidat/change/email', function(req, res) {
        if (req.session) {
            // récupérer les données du formulaires edit candidat email
            var newEmail = req.body.userNewEmail;
            var userId = req.body._id;
            // récupérer le bon candidat avec son userID
            Candidat.findOne({ "_id": userId }, function(err, thing) {
                if (err) console.log(err);
                if (thing) {
                    // mettre à jour l'email du candidat
                    thing.email = newEmail;
                    thing.save(function(err) {
                        if (err) console.log(err);
                        // rediriger sur la page recruteur avec son id
                        res.redirect('/candidat/profile?id=' + userId + "&emailChanged=true");
                    })
                } else {
                    console.log("No Candidat found with _id : " + eventId);
                }
            });
        } else {
            res.redirect("/home");
        }
    });
    app.post('/candidat/add/connaissance', function(req, res) {
        if (req.session) {
            var level = "Débutant";
            if (req.body.level > 5) level = "Bon"
            if (req.body.level > 8) level = "Très bon"
            if (req.body.level == 10) level = "Master"
            Candidat.findOne({ "_id": req.body._id }, function(err, thing) {
                if (err) console.log(err)
                if (!thing) console.log("No Candidat with _id : " + req.body._id)
                thing.connaissances = thing.connaissances.concat([{ "name": req.body.name, "level": level }])
                console.log(thing)
                thing.save(function(err) {
                    if (err) console.log(err)
                    res.redirect('/candidat/profile?id=' + req.body._id + '&conAdded=true')
                })
            });
        } else {
            res.redirect("/home");
        }
    });

    app.post('/candidat/add/experience', function(req, res) {
        if (req.session) {
            var newExp = new Object();
            newExp.jobName = req.body.jobName;
            newExp.enterpriseName = req.body.enterpriseName;
            if (req.body.dateBegin) newExp.dateBegin = new Date(req.body.dateBegin)
            if (req.body.dateEnd) newExp.dateEnd = new Date(req.body.dateEnd)
            Candidat.findOne({ "_id": req.body._id }, function(err, thing) {
                if (err) console.log(err)
                if (!thing) console.log("No Candidat with _id : " + req.body._id)
                thing.experiences = thing.experiences.concat([newExp])
                console.log(thing)
                thing.save(function(err) {
                    if (err) console.log(err)
                    res.redirect('/candidat/profile?id=' + req.body._id + '&expAdded=true')
                })
            });
        } else {
            res.redirect("/home");
        }
    });

    app.post('/candidat/remove/connaissance', function(req, res) {
        if (req.session) {
            // get data
            var userId = req.body.candidatId
            var conId = req.body.conId
            console.log("candidat id : " + userId + " connaissance id : " + conId)
                // remove connaissance from user's connaissances
            Candidat.findOne({ "_id": userId }, function(err, thing) {
                if (err) console.log(err)
                if (!thing) console.log("No match")
                if (thing) {
                    thing.connaissances = thing.connaissances.filter(function(conn) {
                        return conn._id != conId
                    })
                    thing.save(function(err) {
                        if (err) console.log(err)
                        res.redirect('/candidat/profile?id=' + userId)
                    })
                }
            })
        } else {
            res.redirect("/home");
        }
    });

    app.post('/candidat/remove/experience', function(req, res) {
        if (req.session) {
            // get data
            var userId = req.body.candidatId
            var expId = req.body.expId
                // remove connaissance from user's connaissances
            Candidat.findOne({ "_id": userId }, function(err, thing) {
                if (err) console.log(err)
                if (!thing) console.log("No match")
                if (thing) {
                    thing.experiences = thing.experiences.filter(function(exp) {
                        return exp._id != expId
                    })
                    thing.save(function(err) {
                        if (err) console.log(err)
                        res.redirect('/candidat/profile?id=' + userId)
                    })
                }
            })
        } else {
            res.redirect("/home");
        }
    });
}