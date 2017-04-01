angular.module('CandidatProfileCtrl', []).controller('CandidatProfileController', function($scope, $http, $location) {

    if ($location.search().emailChanged) $scope.onEmailChange = true;
    if ($location.search().conAdded) $scope.onConAdded = true;
    if ($location.search().expAdded) $scope.onExpAdded = true;
    // Request the API to get user informations
    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/candidats/" +
            $location.search().id)
        .then(function(response) {
            // set $scope attribute with user informations
            $scope.userResponse = response;
            $scope.post_url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                "onsiteactionskey4YHTE7" +
                "/candidats/" + $scope.userResponse.data._id;
        }).then(function() {
            $scope.$evalAsync(function() {

            });
        }))
});