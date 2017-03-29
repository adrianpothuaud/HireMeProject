module.exports = function(app, db) {
    app.post('/event/edit', function(req, res) {
        if (req.session) {
            // récupérer les données du formulaires edit event
            var newEventName = req.body.newEventName;
            var recruteurId = req.body.recruteurId;
            var eventId = req.body.eventId;

            // console.log(newEventName);

            // récupérer le bon event avec son eventId
            Event.findOne({ "_id": eventId }, function(err, thing) {
                if (err) console.log(err);
                if (thing) {
                    // mettre à jour l'event avec les données
                    // console.log(thing);
                    if (req.body.newEventName) thing.name = req.body.newEventName;
                    if (req.body.newEventDescription) thing.description = req.body.newEventDescription;
                    if (req.body.newEventDateBegin) thing.dateBegin = new Date(req.body.newEventDateBegin);
                    if (req.body.newEventDateEnd) thing.dateEnd = new Date(req.body.newEventDateEnd);
                    console.log("new event name : " + thing.name);
                    thing.save(function(err) {
                        if (err) console.log(err);
                        console.log("Update effectué (normalement), redirection...");
                        // rediriger sur la page recruteur avec son id
                        res.redirect('/recruteur?id=' + recruteurId);
                    })

                } else {
                    console.log("No Event found with _id : " + eventId);
                }
            });
        } else {
            console.log("Session not loaded when trying to access recruteur event creation page..");
            res.redirect("/home");
        }
    });
}