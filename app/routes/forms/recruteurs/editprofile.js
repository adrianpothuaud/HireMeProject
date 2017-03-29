module.exports = function(app, db) {
    app.post('/recruteur/change/email', function(req, res) {
        if (req.session) {
            // récupérer les données du formulaires edit recruteur email
            var newEmail = req.body.newEmail;
            var userId = req.body._id;
            // récupérer le bon candidat avec son userID
            Recruteur.findOne({ "_id": userId }, function(err, thing) {
                if (err) console.log(err);
                if (thing) {
                    // mettre à jour l'email du candidat
                    thing.email = newEmail;
                    thing.save(function(err) {
                        if (err) console.log(err);
                        // rediriger sur la page recruteur avec son id
                        res.redirect('/recruteur/profile?id=' + userId + "&emailChanged=true");
                    })
                } else {
                    console.log("No Recruteur found with _id : " + userId);
                }
            });
        } else {
            res.redirect("/home");
        }
    });

    app.post('/recruteur/change/entreprise', function(req, res) {
        if (req.session) {
            // récupérer les données du formulaires edit recruteur email
            var newEntreprise = req.body.newEntreprise;
            var userId = req.body._id;
            // récupérer le bon candidat avec son userID
            Recruteur.findOne({ "_id": userId }, function(err, thing) {
                if (err) console.log(err);
                if (thing) {
                    // mettre à jour l'email du candidat
                    thing.enterpriseName = newEntreprise;
                    thing.save(function(err) {
                        if (err) console.log(err);
                        // rediriger sur la page recruteur avec son id
                        res.redirect('/recruteur/profile?id=' + userId + "&entrepriseChanged=true");
                    })
                } else {
                    console.log("No Recruteur found with _id : " + userId);
                }
            });
        } else {
            res.redirect("/home");
        }
    });
}