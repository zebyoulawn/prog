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
    $http.get('src/order_status.json')
  .success(function(data) { 
    $scope.orderStatus = data.orderStatus; 
     

  });
   
});





/* --original working code.
angular.module('progApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
    var deferred = $q.defer();
    $http.get('src/order_status.json').then(function (data)
    {
         deferred.resolve(data);
    {
     
    });
    this.orderStatus = function ()
    {
         return deferred.promise;
    }
   
});
*/
