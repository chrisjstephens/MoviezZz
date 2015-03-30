app.controller('MoviezCtrl', function($http) {
//	var self = this;
	
	/*$http.get('app/data/movies.json')
	.success(function (response) {
		this.MoviesInfo = response;
	});*/
	
	this.MoviesInfo = [
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
	
	this.Concessions = 
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
});