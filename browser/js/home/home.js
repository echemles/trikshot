app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function ($scope, $timeout){
	$scope.shareNow = false;
	new Vivus('logo-test', {duration: 100,
	  	start: 'autostart',
	  	type: 'delayed'
  	}, function (logo) {
  		logo.el.classList.add('finished');
  		$timeout(function(){
  			$scope.shareNow = true;
  		}, 1500);
	});
})