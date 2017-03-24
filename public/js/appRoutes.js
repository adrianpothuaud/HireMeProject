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
		})
		
		.when('/candidat/profile', {
			templateUrl: 'views/candidatProfile.html',
			controller: 'CandidatProfileController'
		})
		
		.when('/recruteur/profile', {
			templateUrl: 'views/recruteurProfile.html',
			controller: 'RecruteurProfileController'
		});

	$locationProvider.html5Mode(true);

}]);
