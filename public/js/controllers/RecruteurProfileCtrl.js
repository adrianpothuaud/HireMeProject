// View Controller for recruteurProfile.html HTML Template

angular.module('RecruteurProfileCtrl', []).controller('RecruteurProfileController', function($scope, $http, $location) {

    if ($location.search().emailChanged) $scope.onEmailChange = true;
    if ($location.search().entrepriseChanged) $scope.onEntAdded = true;

    // Request the API to get user informations
    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/recruteurs/" +
            $location.search().id)
        .then(function(response) {
            // set $scope attribute with user informations
            console.log(response.data);
            $scope.userResponse = response;
            $scope.post_url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                "onsiteactionskey4YHTE7" +
                "/recruteurs/" + $location.search().id;
        }).then(function() {
            $scope.$evalAsync(function() {

            });
        }))

});