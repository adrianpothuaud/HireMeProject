// View Controller for login.html HTML Template

angular.module('EditEventCtrl', []).controller('EditEventController', function($scope, $http, $location) {

    $scope.id = $location.search().id;

    $scope.eventId = $location.search().eventId;

});