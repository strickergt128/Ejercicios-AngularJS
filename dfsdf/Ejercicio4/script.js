var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $scope.NewPost = {};
  $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
   }).then(function (success){
     $scope.posts = success.data;
   },function (error){
     alert("No se conecto");
   });

     $scope.addPost = function(){
       $http.post("https://jsonplaceholder.typicode.com/posts",{
         title: $scope.NewPost.title,
         body: $scope.NewPost.body,
         id: 1
       })
       .then(
         function(){
           $scope.posts.push($scope.NewPost);
           $scope.NewPost = {};
         },
         function(response){
           alert("Nose pudo Enviar");
         }
       );
     };
});
