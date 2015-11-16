app.config(function ($stateProvider) {
    $stateProvider.state('home2', {
        url: '/home2',
        templateUrl: 'js/home2/home2.html',
        controller: 'HomeCtrl2'
    });
});

app.controller('HomeCtrl2', function ($scope, $timeout){
	$scope.shareNow = false;
  $scope.present = false;

	$timeout(function() {
    $scope.present = true;
    new Vivus('logo-test', {duration: 100,
      start: 'autostart',
      type: 'delayed'
    }, function (logo) {
      logo.el.classList.add('finished');
      $timeout(function(){
        $scope.shareNow = true;
      }, 1500);
    });
  }, 10000)
  
})