app.config(function ($stateProvider) {
    $stateProvider.state('slideshow', {
        url: '/slideshow',
        controller: 'SlideshowCtrl',
        templateUrl: 'js/slideshow/slideshow.html'
    });
});

app.controller('SlideshowCtrl', function ($scope, SlideFactory, $interval, $state, Socket) {
	var slideLength;
	// $scope.photoOrientation = {
	// 	1:"height: 400px",
	// 	2:"height: 400px",
	// 	3:"transform: rotate(180deg); height: 400px",
	// 	4:"transform: rotate(180deg); height: 400px",
	// 	5:"transform: rotate(270deg); height: 400px",
	// 	6:"transform: rotate(90deg); width: 400px",
	// 	7:"transform: rotate(90deg); width: 400px",
	// 	8:"transform: rotate(270deg); height: 400px",
	// }

	$scope.randomDegree = 1;
	
	var interval = 1000;
	
	$interval(function(){
		$scope.randomDegree = chance.integer({min: -2, max: 2});
		interval = chance.integer({min: 500, max: 5000});
	}, interval)

	SlideFactory.fetchAll()
	.then(function(slides){
		$scope.slides = slides;
		slideLength = slides.length;
	});

	Socket.on('addslide', function(slide){
		$scope.slides.push(slide);
	});

});

// Rotate 180
// Horizontal (normal)
// 