var app = angular.module('httpApp', ['ngResource']);

/////////////////////////========CONTROLLER=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
// app.controller('people', function($scope, $http){
// 	$http.get('file:///C:/rails_projects/kennysandbox/angular_stuff/http_practice/people/data.json')
// 	.success(function(response) {
// 		console.log(response );
// 		$scope.persons = response.records;
// 	});
// }); 

app.controller('people', [ '$scope', '$resource', function($scope, $resource){

}]);