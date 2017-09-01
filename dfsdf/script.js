var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
  $scope.guardar = function(){
    firebase.database().ref('Usuarios/').set({
    Apellido: $scope.apellido,
    CorreoElectronico: $scope.correo,
    Nombre: $scope.nombre,
    Pasword: $scope.password,
    });
  };
  return firebase.database().ref('Usuarios/').once('value').then(function(snapshot) {
    $scope.Nombre = snapshot.val().Nombre;
    $scope.ver = function(){
      if ($scope.us == $scope.Nombre) {
        alert("Nombre Correcto");
      }else{
        alert("Nombre Incorrecto");
      }
    };
  });
});
