'use strict';

/**
 * @ngdoc service
 * @name bootstrappingAngularJsAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the bootstrappingAngularJsAppApp.
 */
angular.module('bootstrappingAngularJsAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=a1229545e71f4cf85672eee69b3b302e', {}, {
       find: {
         method: 'GET',
         params: {
           query: 'seattle'
         },
         isArray: false
       }
     });
   });
