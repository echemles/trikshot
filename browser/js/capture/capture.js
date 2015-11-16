app.config(function ($stateProvider) {
    $stateProvider.state('capture', {
        url: '/capture',
        controller: 'CaptureCtrl',
        templateUrl: 'js/capture/capture.html'
    });
});

app.controller('CaptureCtrl', function ($scope, SlideFactory, Socket, $state) {
	var bucket = new AWS.S3({params: {Bucket: 'trikshot'}});
	$scope.slideReceived = false;
	$scope.slide = {}
	$scope.status = "Awaiting upload.";
	$scope.hasImage = false;

	var takePhoto = document.querySelector("#take-photo");
	takePhoto.onchange = function(event){
		$scope.status = "Sending your photo, give us a sec."
		var image = event.target.files[0];
		EXIF.getData(image, function(){
			$scope.slide.orientation = EXIF.getTag(this, "Orientation");
		})
    	var params = {Key: chance.guid() + '.jpg', ContentType: image.type, Body: image, ACL: "public-read"};
    	bucket.upload(params, function (err, data) {
      		$scope.status = err ? "There's a problem saving your photo — try again later?" : "Now, for your caption —";
      		$scope.slide.photolink = data.Location;
      		$scope.hasImage = true;
      		$scope.$digest();
      	})
	}

	$scope.submitSlide = function(){
		SlideFactory.addSlide($scope.slide)
		.then(function(res){
			Socket.emit('newSlide', res.data)
			$scope.status = res.status === 201 ? "We got your photo. Thank you!" : "Can you do that again? There seems to be a problem."
			$scope.slideReceived = true;
		});
	}

	$scope.refresh = function(){
		$state.reload();
	}

});