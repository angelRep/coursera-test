(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

//1 & 2
//CounterController.$inject = ['$scope'];
//function CounterController($scope) {
//3
CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  //1 & 2 & 3
  $scope.counter = 0;

  //1 One time watch
  //not showing any exceptions
  /*$scope.upCounter = function () {
    setTimeout(function () {
      $scope.counter++;
      console.log("Counter incremented! ");
      $scope.$digest();
    }, 2000);
  };*/

  //2 one time watch
  /*$scope.upCounter = function () {
    setTimeout(function () {
      $scope.$apply(function () { //it will show any exceptions in angular
        $scope.counter++;
        console.log("Counter incremented! ");
        $scope.$digest();
      });
    }, 2000);
  };*/

  //3
  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("Counter incremented!");
    }, 2000);
  };

}

})();
