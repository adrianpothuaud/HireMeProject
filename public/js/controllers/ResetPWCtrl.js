// View Controller for login.html HTML Template

angular.module('ResetPWCtrl', []).controller('ResetPWController', function($scope, $http, $location) {

    $scope.accountType = $location.search().type;

    $scope.id = $location.search().id;

});