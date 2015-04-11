app.controller('MoviezCtrl', function($http, $scope, $location, CurrentMovies, FormValues) {
	
	//Give custom factory to all form values so they can change pages
	$scope.fV = FormValues;
	$scope.cM = CurrentMovies;
	
	$scope.currentDay = function () {
		//Get current day to populate movie schedule
		var d = new Date();
		
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var year = "2022";
		
		var fullDate = month + " - " + day + " - " + year;
		
		var day = d.getDate();
		if (day % 2 ){
			//If the day is odd populate odd/00s movie schedule
			//console.log("Odd Day " + d.getDate());
			$scope.movies00();
			$scope.movieDate = fullDate
			$scope.movieDay = "2000's";
			$scope.movieDayType = "odd"
		} else {
			//If the day is odd populate even/90's movie schedule
			//console.log("Even Day " + d.getDate());
			$scope.movies90();
			$scope.movieDate = fullDate
			$scope.movieDay = "1990's";
			$scope.movieDayType = "even"
		}
	}
	
	//Get 2000's movies json file and populate cM.obj with movies
	$scope.movies00 = function () {
		$http.get('app/data/movies00.json')
		.success(function (response) {
			var movieData = response;
			
			$scope.cM.obj = movieData;
			//console.log("2000's movies loaded.");
		});
	}
	
	$scope.movies90 = function () {
		$http.get('app/data/movies90.json')
		.success(function (response) {
			var movieData = response;
			
			$scope.cM.obj = movieData;
			
			//console.log("1990s movies loaded.");
		});
	}
	
	//JSON layout of concession items
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
		$scope.fV.form1 = true;
		$location.path('/movietime.html');
	}
	$scope.goToForm3 = function() {
		$scope.fV.form2 = true;
		$location.path('/concessions.html');
	}
	$scope.goToForm4 = function() {
		$location.path('/confirmation.html');
	}
	
	
	
	//Helps hide select options on movietime.html
	$scope.ShowTime = false;
	$scope.ShowTime2 = false;
	

	
	$scope.updateConcCost = function(concObj) {
		//Function that gets cost of all the concessions
		//and creates a string of all the items purchased to be put on the receipt.
		
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
	//Enable concItemsChosen to indicate a concessions item has been picked
	$scope.fV.concItemsChosen = true
	//Remove the final comma in string of purchases
	$scope.fV.concPurchases = $scope.fV.concPurchases.substring(0, $scope.fV.concPurchases.length - 1);
	}
	
	$scope.moviesChange = function() {
		
		//Save current movie times from select movie to be put into second select

		//Reset the value for Movie Time Value model
		$scope.fV.movieTime = {};
		
		$scope.movTimes = $scope.fV.movieChosen.times;
		//Set MovieCost to 0 so that form can't be submitted inproperly
		$scope.fV.movieCost = 0; 
		$scope.fV.movieTickets = 0;
			
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
		$scope.fV.movieTickets = 1;
		$scope.updateMoviesCost($scope.fV.movieChosen.price);
	}
	
	//Update price of movie ticket based on movie selection, cost, and amount of tickets selected
	$scope.updateMoviesCost = function(price) {
		$scope.fV.movieCost = 0;
		$scope.fV.movieCost = $scope.fV.movieTickets * price;
	}

	
	//Check if first two form pages are filled out properly
	//If they are filled, properly display receipt
	//Else display error message and prompt user to create a new order
	$scope.finalPageCheck = function() {
		//console.log("into check");
		if($scope.fV.form1 && $scope.fV.form2){
			console.log("forms pass");
			$scope.fV.finalForm =  true;
			$scope.calcTotal();
		} else {
			console.log("forms fail");
			$scope.fV.finalForm =  false;
		}
	}
	
	//Calc total on final page
	$scope.calcTotal = function (){
		//console.log("run total");
		$scope.fV.subTotal = $scope.fV.movieCost + $scope.fV.concTotalCost;
		$scope.fV.tax = $scope.fV.subTotal * 0.15;
		$scope.fV.finalCost = $scope.fV.tax + $scope.fV.subTotal;
	}
	

});