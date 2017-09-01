var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
  $scope.NuevoComentario = {};
  $scope.Comentarios = [
    {
      nombre:"Pedro",
      comentario: "Hola"
    },
    {
      nombre:"Samuel",
      comentario:"K pex"
    }
  ];
  $scope.add = function(){
    $scope.Comentarios.push($scope.NuevoComentario);
    $scope.NuevoComentario = {};
  };
});
