angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/recruteurs', {
            templateUrl: 'views/recruteurs.html',
            controller: 'RecruteursController'
        })

        .when('/candidats', {
            templateUrl: 'views/candidats.html',
            controller: 'CandidatsController'
        })

        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SigninController'
        })

		.when('/recruteur', {
			templateUrl: 'views/recruteur.html',
			controller: 'RecruteurController'
		})

		.when('/candidat', {
			templateUrl: 'views/candidat.html',
			controller: 'CandidatController'
		});

	$locationProvider.html5Mode(true);

}]);
