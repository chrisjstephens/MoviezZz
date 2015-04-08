var app = angular.module('moviez', ['ngRoute']);

//code for router that controls the ui-router/ng-view at the bottom of the page
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
	//Custom factory that allows values to be passed in between different pages in the ng-view form.	
	var formVals = {
		custEmail : '',
		custPhone : '',
		movieChosen : '',
		movieTime : '',
		movieTickets : '',
		movieCost : 0,
		concObjects : {},
		concPurchases : '',
		concTotalCost : 0,
		finalCost : 0,
		tax : 0,
		subTotal : 0
	};
	
	return formVals;
});