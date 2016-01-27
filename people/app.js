(function(){
	var app = angular.module('httpApp', ['ngResource']);

	/////////////////////////========CONTROLLER=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PeopleCtlr', function($scope, $resource){
		$scope.peopleData = $resource(
			'data.json' 
		);

	  $scope.peopleData.get().$promise.then(function(response) {
	  	$scope.peopleInfo = response.records;
	 	  console.log($scope.peopleInfo );
	  });

	});

})();