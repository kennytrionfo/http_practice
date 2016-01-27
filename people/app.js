(function(){


var app = angular.module('httpApp', ['ngResource']);

/////////////////////////========CONTROLLER=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
app.controller('people', ['$scope', '$resource', function($scope, $resource){
	$scope.peopleData = $resource(
		'file:///C:/rails_projects/kennysandbox/angular_stuff/http_practice/people/data.json' 
		// {
		// 	callback: "JSON_CALLBACK"
		// }, 
		// {
		// 	get: 
		// 	{
		// 		method: "JSONP"
		// 	}
		// }
	);
	 $scope.peopleData.get().$promise.then(function(response) {
	 	$scope.peopleInfo = response.records;
	 	console.log($scope.peopleInfo );
	 });

}]);

})();