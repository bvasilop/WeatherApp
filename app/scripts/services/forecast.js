'use strict';

/**
 * @ngdoc service
 * @name bootstrappingAngularJsAppApp.forecast
 * @description
 * # forecast
 * Factory in the bootstrappingAngularJsAppApp.
 */
angular.module('bootstrappingAngularJsAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=a1229545e71f4cf85672eee69b3b302e', {}, {
         query: {
           method:'GET',
           params:{
             cityID: '4717560' // Paris, France ID
           },
           isArray:false
         }
       });
     });
