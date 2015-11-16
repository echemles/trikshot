app.factory('SlideFactory', function ($http, AuthService, $uibModal, $rootScope) {
	var SlideFactory = {};

	SlideFactory.addSlide = function(slide){
		return $http.post('/api/slides', slide);
	}

	SlideFactory.fetchAll = function(){
		return $http.get('/api/slides')
		.then(function(response){
			return response.data;
		});
	}

	SlideFactory.delete = function(id){
		return $http.delete('/api/slides/' + id)
		.then(function(response){
			return response.data;
		});
	}
	return SlideFactory;
})