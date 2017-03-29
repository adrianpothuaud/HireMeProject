// For later implementation ...
// Used to return to recruteur page with ID

// View Controller for create event form

angular.module('CreateEventFormCtrl', []).controller('CreateEventFormController', function($scope, $http, $location) {
    $scope.id = $location.search().id;
    $scope.enterpriseName = $location.search().enterprise;
});