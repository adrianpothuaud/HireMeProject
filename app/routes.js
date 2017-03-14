module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	// Make an API to get data into JSON format / interact with DB
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
