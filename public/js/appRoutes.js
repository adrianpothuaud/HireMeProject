angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/recruteur', {
			templateUrl: 'views/recruteur.html',
			controller: 'RecruteurController'
		})

		.when('/candidat', {
			templateUrl: 'views/candidat.html',
			controller: 'CandidatController'
		})

		.when('/recruteurs', {
			templateUrl: 'views/recruteurs.html',
			controller: 'RecruteursController'
		})

		.when('/candidats', {
			templateUrl: 'views/candidats.html',
			controller: 'CandidatsController'
		});

	$locationProvider.html5Mode(true);

}]);
