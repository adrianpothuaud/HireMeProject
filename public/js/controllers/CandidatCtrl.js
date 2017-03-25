angular.module('CandidatCtrl', []).controller('CandidatController', function($scope) {

	$scope.msgWelcomeCandidat = 'Bienvenue Candidat ! Surveillez les évènements...';
	$scope.profile_progressbar_valuenow = 70;
	$scope.profile_progressbar_valuenow_string = "70";
	$scope.profile_progressbar_class = "progress-bar progress-bar-success";
	$scope.profile_progressbar_style = "width: 70%";
	$scope.onGoingEventsCpt = 3;
	$scope.upComingEventsCpt = 6;

});
