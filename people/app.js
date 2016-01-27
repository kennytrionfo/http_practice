(function(){

	var app = angular.module('httpApp', ['ngResource']);

	/////////////////////////========CONTROLLER=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	function PeopleCtrl($scope, $resource){
		$scope.peopleData = $resource('data.json').get().$promise.then(function(response) {
	  	$scope.peopleInfo = response.records;
	 	  // console.log($scope.peopleInfo );
	  });
	}
	app.controller('PeopleCtrl', PeopleCtrl);

})();