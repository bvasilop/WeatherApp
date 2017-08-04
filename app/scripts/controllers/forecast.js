'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID
      });
    });
