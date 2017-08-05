'use strict';

describe('Service: current', function () {

  // load the service's module
  beforeEach(module('bootstrappingAngularJsAppApp'));

  // instantiate service
  var current;
  beforeEach(inject(function (_current_) {
    current = _current_;
  }));

  it('should do something', function () {
    expect(!!current).toBe(true);
  });
  angular.module('yourApp')
    .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
      $scope.citiesFound = citysearch.find();
      $scope.storage = $localStorage;

      $scope.findCities = function(){
          $scope.citiesFound = citysearch.find({
              query: $scope.location
          });
          $scope.searchQuery = $scope.location;
      };
    });
});
