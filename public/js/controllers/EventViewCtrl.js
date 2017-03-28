// View Controller for about event HTML page
// for both Candidat and Recruteur accounts

angular.module('EventViewCtrl', []).controller('EventViewController', function($scope, $http, $location) {

    $scope.id = $location.search().id;

    $scope.accountType = $location.search().type;

    $scope.eventId = $location.search().eventId;

    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/events/" +
            $location.search().eventId)
        .then(function(response) {
            // set $scope attribute with user informations
            $scope.eventResponse = response;
        }).then(function() {
            $scope.$evalAsync(function() {})
        })
    );

});