'use strict';

/**
 * @ngdoc function
 * @name progApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progApp
 */

// Progress Bar

angular.module('progApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];  
    $http.get('src/order_status.json')
  .success(function(data) { 
    $scope.orderStatus = data.orderStatus; 

  });
   
});

 

