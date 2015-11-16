app.factory("previewImageModal", function(){
	return function(photoLink){
		return {
			animation: true,
			templateUrl: '/js/common/modals/image-preview.html',
			controller: 'imagePreviewCtrl',
			size: 'sm',
			resolve: {
				photoLink: function(){
					return photoLink;
				}
			}
		}
	}
})

app.controller('imagePreviewCtrl', function($scope, photoLink, $state, $uibModalInstance){		
	$scope.photo = photoLink;
})