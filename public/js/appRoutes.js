// Angular Single Page Application view-router
// Define all accessible routes and corresponding html template + view controller

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        // about 
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        // onboarding routes
        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SigninController'
        })
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        // user home page
        .when('/recruteur', {
            templateUrl: 'views/recruteur.html',
            controller: 'RecruteurController'
        })
        .when('/candidat', {
            templateUrl: 'views/candidat.html',
            controller: 'CandidatController'
        })
        // admin connection
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
        // user profile page
        .when('/candidat/profile', {
            templateUrl: 'views/candidatProfile.html',
            controller: 'CandidatProfileController'
        })
        .when('/recruteur/profile', {
            templateUrl: 'views/recruteurProfile.html',
            controller: 'RecruteurProfileController'
        })
        .when('/event/createform', {
            templateUrl: 'views/createEventForm.html',
            controller: 'CreateEventFormController'
        })
        .when('/event/editform', {
            templateUrl: 'views/editFormEvent.html',
            controller: 'EditEventController'
        })
        .when('/eventView', {
            templateUrl: 'views/eventView.html',
            controller: 'EventViewController'
        })
        .when('/resetpassword', {
            templateUrl: 'views/resetPassword.html',
            controller: 'ResetPWController'
        })
        .when('/joinStreamRecruteur', {
            templateUrl: 'views/joinStreamRecruteur.html',
            controller: 'joinStreamRecruteurController'
        })
        .when('/joinStreamCandidat', {
            templateUrl: 'views/joinStreamCandidat.html',
            controller: 'joinStreamCandidatController'
        });

    $locationProvider.html5Mode(true);

}]);