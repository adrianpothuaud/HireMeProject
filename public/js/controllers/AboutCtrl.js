// For later implementation ...
// Use the API to get informations on Application's statistics
// Render in about.html page

// View Controller for home.html HTML Template

angular.module('AboutCtrl', []).controller('AboutController', function($scope, $http, $location) {

    $scope.Enterprises = new Array();
    $scope.Jobs = new Array();

    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/candidats")
        .then(function(response) {
            // set $scope attribute with user informations
            $scope.nbCandidats = response.data.length;
        })
        .then(function() {
            $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                "onsiteactionskey4YHTE7" +
                "/recruteurs/")
            .then(function(response) {
                // set $scope attribute with user informations
                $scope.nbRecruteurs = response.data.length;
                $scope.Recruteurs = response.data;
            }).then(function() {
                $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                    "onsiteactionskey4YHTE7" +
                    "/events/")
                .then(function(response) {
                    // set $scope attribute with user informations
                    $scope.nbEvents = response.data.length;
                }).then(function() {
                    $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                        "onsiteactionskey4YHTE7" +
                        "/experiences/")
                    .then(function(response) {
                        // set $scope attribute with user informations
                        $scope.Experiences = response.data;
                    }).then(function() {
                        $scope.$evalAsync(function() {
                            $scope.Recruteurs.forEach(function(recruteur){
                                if (recruteur.enterpriseName) {
                                    if($.inArray(recruteur.enterpriseName, $scope.Enterprises) === -1) $scope.Enterprises.push(recruteur.enterpriseName);
                                }
                            });
                            $scope.Experiences.forEach(function(experience){
                                if (experience.jobName) {
                                    if($.inArray(experience.jobName, $scope.Jobs) === -1) $scope.Jobs.push(experience.jobName);
                                }
                            });
                        });
                    })
            })
        })
    })
    )
        
        
        

});