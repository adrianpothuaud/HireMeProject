angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SigninController'
        })

        .when('/login', {
            templateUrl: 'views/login.html'
        })

		.when('/recruteur', {
			templateUrl: 'views/recruteur.html',
			controller: 'RecruteurController'
		})

		.when('/candidat', {
			templateUrl: 'views/candidat.html',
			controller: 'CandidatController'
		})

		.when('/admin', {
		    templateUrl: 'views/admin.html',
            controller: 'AdminController'
		});

	$locationProvider.html5Mode(true);

}]);
