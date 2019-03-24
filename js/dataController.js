/*mainApp.controller ('dataController', function($scope,$http) {
    var url = "js/data.txt";

    $http.get(url).then( function(response) {
       $scope.students = response.data;
    });
 });*/

 function dataController($scope,$http) {
    var url = "js/data.txt";

    $http.get(url).then( function(response) {
       $scope.students = response.data;
    });
 }