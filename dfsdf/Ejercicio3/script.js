var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
   }).then(function (success){
     $scope.ya = success.data;
     $scope.posts = $scope.ya;
   },function (error){

   });
});
