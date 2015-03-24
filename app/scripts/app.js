'use strict';

/**
 * @ngdoc overview
 * @name progApp
 * @description
 * # progApp
 *
 * Main module of the application.
 */
angular
  .module('progApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

 
 var app = angular.module('progApp', [ngAnimate]);
 app.controller('barController', function ($scope){
   $scope.checkoutwrap = 'start-class';
 });
 app.animation('.fadeOut', function () {
  return {
    enter : function(element, parentElement, afterElement, doneCallback) {},
    leave : function(element, doneCallback) {},
    move : function(element, parentElement, afterElement, doneCallback) {},
    addClass : function(element, className, done) {
      jQuery(element).animate({opacity: 0}, 3000);
    },
    removeClass : function(element, className, done) {
      jQuery(element).animate({opacity: 1}, 3000);
    }
  };
});
