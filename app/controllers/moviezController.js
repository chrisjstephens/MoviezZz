app.controller('MoviezCtrl', function($http, $scope) {
//	var self = this;
	
	/*$http.get('app/data/movies.json')
	.success(function (response) {
		this.MoviesInfo = response;
	});*/ 
	
	$scope.MoviesInfo = [
	{	
		id: 1,
		moviename : "Battlefield Earth",
		releasedate : "12 May 2000",
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
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
		summary : "",
		price : "1",
		times: [
			"1:00 PM",
			"11:00 PM"
		]
	}
	];
	
	$scope.moviesChange = function() {
		//Save current movie times from select movie to be put into second select
		$scope.movTimes = $scope.currentMovie.times;
		//Show Second Select
		$scope.ShowTime = true;
	};
	
	$scope.updateMoviesCost = function() {
		$scope.moviesCost = $scope.moviesTicketAmt * 1337.99;
	}
	
	$scope.ShowTime = false;

});