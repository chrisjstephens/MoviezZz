app.controller('ConcessionCtrl', function($http, $scope) {
	$scope.bob = "bobbbbbyyyy";
	$scope.concessions = 
	[{	
		id: 1,
		name : "Popcorn",
		price : "5",
		description : "Cold Popcorn that has been popped sometime in the last year!"
	},
	{	
		id: 2,
		name : "Chocolate Covered Deep Fried French Fries",
		price : "50",
		description: "Our scientists have created this piece of wonder. French Fries that are deep fried, then covered in Chocolate!"
	},
	{	
		id: 3,
		name : "Redbull",
		price : "2.99",
		description : "A dose of sugar to keep you awake during our classics!"
	},
	{	
		id: 4,
		name : "MoviezZz Tap Water",
		price : "99.99",
		description : "Tap Water infused with our secret MoviezZz ingredients!"
	}];
	
	$scope.conc1 = 0; 
	$scope.conc2 = 0; 
	$scope.conc3 = 0;
	$scope.conc4 = 0;
	
	$scope.updateTotalCost = function(price) {
		$scope.totalCost = ($scope.conc1 * 5) + ($scope.conc2 * 5) + ($scope.conc3 * 5) + ($scope.conc4 * 5);
	}
});