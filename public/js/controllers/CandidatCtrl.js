// View Controller for candidat.html HTML Template

angular.module('CandidatCtrl', []).controller('CandidatController', function($scope) {

	$scope.msgWelcomeCandidat = 'Bienvenue Candidat ! Surveillez les évènements...';

	// Profile progress bar configuration
	$scope.profile_progressbar_valuenow = 70;
	$scope.profile_progressbar_valuenow_string = "70";
	$scope.profile_progressbar_class = "progress-bar progress-bar-success";
	$scope.profile_progressbar_style = "width: 70%";

	// Accessible events configuration
	$scope.onGoingEventsCpt = 3;
	$scope.upComingEventsCpt = 6;

});
