var app = angular.module('httpApp', ['ngResource']);

/////////////////////////========CONTROLLER=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
// app.controller('people', function($scope, $http){
// 	$http.get('file:///C:/rails_projects/kennysandbox/angular_stuff/http_practice/people/data.json')
// 	.success(function(response) {
// 		console.log(response );
// 		$scope.persons = response.records;
// 	});
// }); 

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
	$scope.peopleInfo = $scope.peopleData.get(
		{
			records : [0].name
		}
	);
	console.log($scope.peopleInfo );

}]);