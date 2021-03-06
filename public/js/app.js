// Initialize all Angular Modules 

angular.module('mainApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AboutCtrl', 'CreateEventFormCtrl',
    'EditEventCtrl', 'EventViewCtrl', 'ResetPWCtrl', 'joinStreamCandidatCtrl', 'joinStreamRecruteurCtrl',
    'CandidatCtrl', 'CandidatProfileCtrl', 'CandidatService', 'CandidatProfileService',
    'RecruteurCtrl', 'RecruteurProfileCtrl', 'RecruteurService', 'RecruteurProfileService',
    'AdminCtrl', 'AdminService', 'SigninCtrl', 'SigninService', 'LoginCtrl', 'LoginService'
]);