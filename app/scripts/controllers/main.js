'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
           $scope.current = current.query({
               location: $scope.location
           });
       };
     });
