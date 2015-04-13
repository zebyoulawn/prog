'use strict';

/**
 * @ngdoc function
 * @name progApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progApp
 */
angular.module('progApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// Progress Bar


angular.module('progApp')
  .controller('TimetableCtrl', function TimetableCtrl($scope, $http) {
  $http.get('src/order_status.json')
  .success(function(data) { $scope.orderStatus = data.orderStatus; });
   
});


angular.module('progApp')
  .controller('Carlos', function Carlos($scope, $http) {
  $http.get('src/order_status.json')
  .success(function(data) { $scope.orderStatus = data.orderStatus; });
   
});

 

