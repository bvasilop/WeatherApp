'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('MainCtrl', function ($scope, citysearch) {
    $scope.citiesFound = citysearch.find();

    $scope.findCities = function(){
           $scope.citiesFound = citysearch.find({
               query: $scope.location
           });
           $scope.searchQuery = $scope.location;
       };
     });
