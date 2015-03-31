var app = angular.module('moviez', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'info.html',
		controller: 'MoviezCtrl'
	})
	.when('/movietime.html', {
		templateUrl: 'movietime.html',
	})
	.when('/concessions.html', {
		templateUrl: 'concessions.html',
	})
	.when('/confirmation.html',{
		templateUrl: 'confirmation.html',
	});
});