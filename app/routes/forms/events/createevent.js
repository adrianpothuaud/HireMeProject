var Event = require('../../../models/Event')

module.exports = function(app, db) {
    app.post('/create/event', function(req, res) {
        if (req.session) {
            // get recruteur id for later redirection
            var _id = req.body._id;

            // create new event with form values
            var newEvent = new Event();
            newEvent.name = req.body.name
            newEvent.description = req.body.description
            newEvent.dateBegin = new Date(req.body.dateBegin)
            newEvent.dateEnd = new Date(req.body.dateEnd)
            newEvent.enterpriseName = req.body.enterpriseName
                // connaissances
            if (req.body.connaissanceRequise) {
                console.log(req.body.connaissanceRequise)
                newEvent.connaissancesRequises = req.body.connaissancesRequises
            }
            // experiences
            if (req.body.experienceRequise) {

            }
            // save event
            newEvent.save(function(err) {
                    if (err) console.log(err)
                    res.redirect('/recruteur?id=' + _id)
                })
                // redirect to recruteur page with id
        } else {
            res.redirect("/home");
        }
    });
}