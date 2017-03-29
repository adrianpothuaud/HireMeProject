// View Controller for login.html HTML Template

angular.module('joinStreamCandidatCtrl', []).controller('joinStreamCandidatController', function($scope, $location) {

    $scope._id = $location.search().id

});