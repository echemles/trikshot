app.config(function ($stateProvider) {
    $stateProvider.state('presentation', {
        url: '/presentation',
        controller: 'presentationCtrl',
        templateUrl: 'js/presentation/presentation.html'
    });
});

app.controller('presentationCtrl', function ($scope) {
	$scope.expansions = ['https://s3.amazonaws.com/trikshot/exp1.png',
		'https://s3.amazonaws.com/trikshot/exp2.png',
		'https://s3.amazonaws.com/trikshot/exp3.png',
		'https://s3.amazonaws.com/trikshot/exp4.png',
		'https://s3.amazonaws.com/trikshot/exp5.png']
});