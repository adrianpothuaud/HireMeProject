// View Controller for candidat.html HTML Template

angular.module('CandidatCtrl', []).controller('CandidatController', function($scope, $http, $location) {

    console.log($scope);

    // Profile progress bar configuration

    // Request the API with process.env['API_KEY']
    // 1 : get candidat id by requesting the API /candidats/byemail/

    // TEST _id = "58d7da87a43807c788d07e6a"
    $scope.$watch($http.get("http://localhost:8080/api" +
            "onsiteactionskey4YHTE7" +
            "/candidats/" +
            $location.search().id)
        .then(function(response) {
            console.log("Response arrived !");
            console.log(response);
            $scope.response = response;
        }).then(function() {
            $scope.$evalAsync(function(response) {
                console.log('$evalAsync executed');
                $scope.msgWelcomeCandidat = 'Bienvenue ' + $scope.response.data.firstname + ' ' + $scope.response.data.lastname + ' ! Surveillez les évènements...';
                $scope.profile_progressbar_valuenow = 0;
                if ($scope.response.data.firstname) $scope.profile_progressbar_valuenow += 20;
                if ($scope.response.data.lastname) $scope.profile_progressbar_valuenow += 20;
                if ($scope.response.data.email) $scope.profile_progressbar_valuenow += 20;
                if ($scope.response.data.connaissances.length > 0) $scope.profile_progressbar_valuenow += 20;
                if ($scope.response.data.experiences.length > 0) $scope.profile_progressbar_valuenow += 20;
                $scope.profile_progressbar_valuenow_string = $scope.profile_progressbar_valuenow.toString();
                $scope.profile_progressbar_style = "width: " + $scope.profile_progressbar_valuenow + "%";
            });
        }));



    // $scope.profile_progressbar_valuenow = 70;

    $scope.profile_progressbar_class = "progress-bar progress-bar-success";

    // Accessible events configuration
    $scope.onGoingEventsCpt = 3;
    $scope.upComingEventsCpt = 6;

});