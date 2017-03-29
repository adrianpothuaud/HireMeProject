// View Controller for recruteur.html HTML Template

angular.module('RecruteurCtrl', []).controller('RecruteurController', function($scope, $http, $location) {

    const INFO_LIMIT = 5

    // Request the API to get user informations
    $scope.$watch($http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
            "onsiteactionskey4YHTE7" +
            "/recruteurs/" +
            $location.search().id)
        .then(function(response) {
            // set $scope attribute with user informations
            $scope.userResponse = response;
            console.log(response.data);
        }).then(function() {
            // Request the API to get Events informations
            $http.get($location.protocol() + '://' + $location.host() + ':' + $location.port() + "/api" +
                    "onsiteactionskey4YHTE7" +
                    "/events")
                .then(function(response) {
                    // set $scope attribute with events list
                    $scope.eventsResponse = response;
                })
                .then(function() {
                    $scope.$evalAsync(function() {
                        // Welcome message configuration
                        $scope.msgWelcomeRecruteur = 'Bienvenue ' + $scope.userResponse.data.firstname + ' ' + $scope.userResponse.data.lastname + ' !';
                        // Profile progress bar configuration
                        // % value
                        $scope.profile_progressbar_valuenow = 0;
                        if ($scope.userResponse.data.firstname) $scope.profile_progressbar_valuenow += 20;
                        if ($scope.userResponse.data.lastname) $scope.profile_progressbar_valuenow += 20;
                        if ($scope.userResponse.data.email) $scope.profile_progressbar_valuenow += 20;
                        if ($scope.userResponse.data.enterpriseName) $scope.profile_progressbar_valuenow += 40;
                        // % value to string
                        $scope.profile_progressbar_valuenow_string = $scope.profile_progressbar_valuenow.toString();
                        // progress bar width
                        $scope.profile_progressbar_style = "width: " + $scope.profile_progressbar_valuenow + "%";
                        // progress bar class
                        $scope.profile_progressbar_class = "progress-bar progress-bar-danger";
                        if ($scope.profile_progressbar_valuenow > 25) {
                            if ($scope.profile_progressbar_valuenow > 50) {
                                if ($scope.profile_progressbar_valuenow > 75) {
                                    $scope.profile_progressbar_class = "progress-bar progress-bar-success";
                                } else {
                                    $scope.profile_progressbar_class = "progress-bar progress-bar-info";
                                }
                            } else {
                                $scope.profile_progressbar_class = "progress-bar progress-bar-warning";
                            }
                        }

                        // Accessible events configuration
                        // initialize events ongoing/upcoming/passed
                        $scope.onGoingEventsCpt = 0;
                        $scope.upComingEventsCpt = 0;
                        $scope.passedEventsCpt = 0;
                        $scope.onGoingEvents = [];
                        $scope.upComingEvents = [];
                        $scope.passedEvents = [];
                        // loop on events and set $scope
                        var now = new Date();
                        $scope.eventsResponse.data.forEach(function(element) {
                            // ToDo ===================
                            // if enterprise name match
                            // ========================
                            if ($scope.userResponse.data.enterpriseName == element.enterpriseName) {
                                var beginD = new Date(element.dateBegin).getTime(),
                                    endD = new Date(element.dateEnd).getTime();
                                // MongoDB -> String -> JavaScript Objects
                                element.dateBegin = new Date(element.dateBegin);
                                element.dateEnd = new Date(element.dateEnd);
                                if (beginD <= now.getTime() && now.getTime() <= endD) {
                                    $scope.onGoingEventsCpt += 1;
                                    if ($scope.onGoingEvents.length < INFO_LIMIT) {
                                        $scope.onGoingEvents = $scope.onGoingEvents.concat(element);
                                    }
                                } else if (now.getTime() <= beginD) {
                                    $scope.upComingEventsCpt += 1;
                                    if ($scope.upComingEvents.length < INFO_LIMIT) {
                                        $scope.upComingEvents = $scope.upComingEvents.concat(element);
                                    }
                                } else {
                                    $scope.passedEventsCpt += 1;
                                    if ($scope.passedEvents.length < INFO_LIMIT) {
                                        $scope.passedEvents = $scope.passedEvents.concat(element);
                                    }
                                }
                            }
                        }, this);

                        // use events in ng-repeat on HTML template candidat.html
                    });
                })
        }));
});