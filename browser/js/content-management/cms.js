app.config(function ($stateProvider) {
    $stateProvider.state('cms', {
        url: '/cms',
        controller: 'CMSCtrl',
        templateUrl: 'js/content-management/cms.html'
    });
});

app.controller('CMSCtrl', function ($scope, SlideFactory, previewImageModal, Socket) {

	SlideFactory.fetchAll()
	.then(function(slides){
		$scope.slides = slides;
	});

	// $scope.previewImage = function(photoLink){
	// 	$uibModal.open(previewImageModal(photoLink));
	// }

	$scope.remove = function(index, id){
		$scope.slides.splice(index, 1);
		SlideFactory.delete(id);
	}

	$scope.print = function(id){
		$("#" + id).print();
	}

	Socket.on('addslide', function(slide){
		$scope.slides.push(slide);
		$scope.$digest();
	});
});

