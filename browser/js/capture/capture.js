app.config(function ($stateProvider) {
    $stateProvider.state('capture', {
        url: '/capture',
        controller: 'CaptureCtrl',
        templateUrl: 'js/capture/capture.html'
    });
});

app.controller('CaptureCtrl', function ($scope) {
	var bucket = new AWS.S3({params: {Bucket: 'trikshot'}});
	$scope.status = "Awaiting upload.";
	$scope.hasImage = false;
	var takePhoto = document.querySelector("#take-photo");
	takePhoto.onchange = function(event){
		var image = event.target.files[0];
    	var params = {Key: image.name, ContentType: image.type, Body: image, ACL: "public-read"};
    	bucket.upload(params, function (err, data) {
     		console.log(err, data);
      		$scope.status = err ? "Error!" : "Uploaded";
      		$scope.$digest();
      	})
	}
});


// window.onload = function(){
  
//   var photoUpload = document.getElementById("takephoto");
//   photoUpload.addEventListener("change", capture, false);
//   function capture() {
//     var thisImage = this.files[0]; /* now you can work with the file list */
//     var params = {Key: thisImage.name, ContentType: thisImage.type, Body: thisImage};
//     bucket.upload(params, function (err, data) {
//       console.log(err, data);
//       results.innerHTML = err ? 'ERROR!' : 'UPLOADED.';
//     });
//     // var imgURL = window.URL.createObjectURL(thisImage);
//     // var showPicture = document.querySelector("#show-picture");
//     // showPicture.src = imgURL;
//     // URL.revokeObjectURL(imgURL);

//     // $.ajax({
//     //   type: 'POST',
//     //   data: {img: thisImage.toString()},
//     //   url: '/api/slides/',
//     //   success: function() {
//     //     console.log("SUCCESS")
//     //   }
//     // })
//   }
// };