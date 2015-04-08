app.controller('MoviezCtrl', function($http, $scope, $location, FormValues) {
	
	/*$http.get('app/data/movies.json')
	.success(function (response) {
		this.MoviesInfo = response;
	});*/ 
	
	$scope.MoviesInfo = [
	{	
		id: 1,
		moviename : "Battlefield Earth",
		releasedate : "12 May 2000",
		imdbLink : "http://www.imdb.com/title/tt0185183",
		price : "500",
		times: [
			"1:00 PM",
			"1:30 PM",
			"2:00 PM",
			"4:00 PM",
			"5:00 PM",
			"6:00 PM",
			"7:00 PM",
			"8:00 PM",
			"9:00 PM",
			"10:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 2,
		moviename : "Ace Ventura: The Pet Detective",
		releasedate : "4 February 1994",
		imdbLink : "http://www.imdb.com/title/tt0109040",
		price : "1",
		times: [
			"1:00 PM",
			"2:00 PM",
			"4:00 PM",
			"5:00 PM",
			"6:00 PM",
			"7:00 PM",
			"8:00 PM",
			"9:00 PM",
			"10:00 PM"
		]
	},
	{
		id: 3,
		moviename : "Armageddon",
		releasedate : "1 July 1998",
		imdbLink : "http://www.imdb.com/title/tt0120591",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 4,
		moviename : "Deep Impact",
		releasedate : "8 May 1998",
		imdbLink : "http://www.imdb.com/title/tt0120647",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 5,
		moviename : "Mars Attacks!",
		releasedate : "13 December 1996",
		imdbLink : "http://www.imdb.com/title/tt0116996",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 6,
		moviename : "The Lion King",
		releasedate : "24 June 1994",
		imdbLink : "http://www.imdb.com/title/tt0110357",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 7,
		moviename : "Home Alone",
		releasedate : "16 November 1990",
		imdbLink : "http://www.imdb.com/title/tt0099785",
		price : "10",
		times: [
			"1:00 PM",
			"1:30 PM",
			"2:00 PM",
			"4:00 PM",
			"5:00 PM",
			"6:00 PM",
			"7:00 PM",
			"8:00 PM",
			"9:00 PM",
			"10:00 PM",
			"11:00 PM",
			"12:00 PM"
		]
	},
	{
		id: 8,
		moviename : "Free Willy",
		releasedate : "16 July 1993",
		imdbLink : "http://www.imdb.com/title/tt0106965",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 9,
		moviename : "Homeward Bound",
		releasedate : "12 February 1993",
		imdbLink : "http://www.imdb.com/title/tt0107131",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	},
	{
		id: 10,
		moviename : "Space Jam",
		releasedate : "15 November 1996",
		imdbLink : "http://www.imdb.com/title/tt0117705",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	}
	];
	
	$scope.concessions = 
	[{	
		id: 1,
		name : "Popcorn",
		price : "5",
		description : "Cold Popcorn that has been popped sometime in the last year!",
		selectedAmt : 0,
		
	},
	{	
		id: 2,
		name : "Chocolate Covered Deep Fried French Fries",
		price : "50",
		description: "Our scientists have created this piece of wonder. French Fries that are deep fried, then covered in Chocolate!",
		selectedAmt : 0
	},
	{	
		id: 3,
		name : "Redbull",
		price : "2.99",
		description : "A dose of sugar to keep you awake during our classics!",
		selectedAmt : 0
	},
	{	
		id: 4,
		name : "MoviezZz Tap Water",
		price : "99.99",
		description : "Tap Water infused with our secret MoviezZz ingredients!",
		selectedAmt : 0
	}];
	
	$scope.goToForm2 = function() {
		$location.path('/movietime.html');
	}
	$scope.goToForm3 = function() {
		$location.path('/concessions.html');
	}
	$scope.goToForm4 = function() {
		$location.path('/confirmation.html');
	}
	
	//give custom factory to all form values so they can change pages
	$scope.fV = FormValues;
	
	//Helps hide select options on movietime.html
	$scope.ShowTime = false;
	$scope.ShowTime2 = false;
	

	
	$scope.updateConcCost = function(concObj) {
		//Function that gets cost of all the concessions
		//and creates a string of all the items purcahsed to be put on the receipt.
		
		//Get current values of all the objects selected
		$scope.fV.concObjects = concObj;
		
		//reset value to 0 and reset the value of conc Purchases
		$scope.fV.concTotalCost = 0;
		$scope.fV.concPurchases = "";
		
		for(var i = 0, l = $scope.fV.concObjects.length; i < l; i++)
		{
			if($scope.fV.concObjects[i].selectedAmt > 0)
			{
				var itemPrice = 0;
				var itemsPurch = "";
				//Calc Price
				itemPrice = ($scope.fV.concObjects[i].selectedAmt) * ($scope.fV.concObjects[i].price);
				itemsPurch = " " + $scope.fV.concObjects[i].selectedAmt + " x " + $scope.fV.concObjects[i].name + " @ " + $scope.fV.concObjects[i].price + ",";
				
				//Update Cost
				$scope.fV.concTotalCost += itemPrice;
				//Add Concessions purchased to summary
				$scope.fV.concPurchases += itemsPurch; 
			}
		}
	}
	
	$scope.moviesChange = function() {
		//Save current movie times from select movie to be put into second select

		//Reset the value for Movie Time Value model
		$scope.fV.movieTime = {};
		
		$scope.movTimes = $scope.fV.movieChosen.times;
		$scope.fV.movieCost = 0; 
		$scope.moviesTicketAmt = 1;
			
		//Show Rest of Items in Form
		$scope.ShowTime = true;
		$scope.ShowTime2 = false;
	};
	
	//Hide select options on movietime page
	$scope.restartMovie = function() {
		$scope.ShowTime = false;
		$scope.ShowTime2 = false;
	}
	
	//Display movie ticket selector, price of ticket, and total movie cost
	$scope.showTickets = function() {
		$scope.ShowTime2 = true;
		$scope.updateMoviesCost($scope.fV.movieChosen.price);
	}
	
	//update price of movie ticket based on movie selection, cost, and amount of tickets selected
	$scope.updateMoviesCost = function(price) {
		$scope.fV.movieCost = 0;
		$scope.fV.movieCost = $scope.moviesTicketAmt * price;
	}
	
	//Calc total on final page
	$scope.calcTotal = function (){
		$scope.fV.subTotal = $scope.fV.movieCost + $scope.fV.concTotalCost;
		$scope.fV.tax = $scope.fV.subTotal * 0.15;
		$scope.fV.finalCost = $scope.fV.tax + $scope.fV.subTotal;
	}
	
	

});