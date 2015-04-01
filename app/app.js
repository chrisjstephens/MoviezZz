var app = angular.module('moviez', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'info.html',
		controller: 'MoviezCtrl'
	})
	.when('/movietime.html', {
		templateUrl: 'movietime.html',
		controller: 'MoviezCtrl'
	})
	.when('/concessions.html', {
		templateUrl: 'concessions.html',
		controller: 'MoviezCtrl'
	})
	.when('/confirmation.html',{
		templateUrl: 'confirmation.html',
		controller: 'MoviezCtrl'
	});
});

app.factory('FormValues', function(){
		
	formVals = {};
	
	formVals.custNames = '';
	formVals.custEmail = '';
	formVals.custPhone = '';
	formVals.movieChosen = '';
	formVals.movieTime = '';
	formVals.movieTickets = '';
	formVals.movieCost = '';
	formVals.concPopcorn = '';
	formVals.concCcDfFf = '';
	formVals.concRedbull = '';
	formVals.concTapWater = '';
	
	
	return formVals;
	
});