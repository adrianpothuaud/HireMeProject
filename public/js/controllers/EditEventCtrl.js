// View Controller for login.html HTML Template

angular.module('EditEventCtrl', []).controller('EditEventController', function($scope, $http, $location) {

    $scope.id = $location.search().id;

    $scope.eventId = $location.search().eventId;

    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/events/" +
            $location.search().eventId)
        .then(function(response) {
            // set $scope attribute with user informations
            $scope.userResponse = response;
        }).then(function() {
            $scope.$evalAsync(function() {})
        })
    );

});