// View Controller for login.html HTML Template

angular.module('joinStreamRecruteurCtrl', []).controller('joinStreamRecruteurController', function($scope, $location) {

    $scope._id = $location.search().id

});