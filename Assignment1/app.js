(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope, $filter) {
  $scope.foods = "";
  $scope.message = "";

  $scope.showMessage = function () {
    var num = 0;
    var start = false;
    var temp = "";
    var size = $scope.foods.length;

    if(size>0) {
      for (var i=0; i<size; i++) {
        var ch = $scope.foods.charAt(i);
        if (ch == ',') {
          if (temp!= "" || temp!= " ") {
            temp = "";
          }
          if (start) {
            start = false;
          }
        }
        else if (ch == ' ') {

        }
        else {
          temp = ch.toString();
          if(!start) {
            num++;
            start = true;
          }
        }
       }
     }

    if (num == 0) {
      $scope.message = "Please enter data first";
    }
    else if (num<=3) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
  };
}

})();
