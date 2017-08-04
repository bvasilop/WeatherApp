'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });
  });
