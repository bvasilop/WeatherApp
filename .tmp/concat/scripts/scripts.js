'use strict';

/**
 * @ngdoc overview
 * @name bootstrappingAngularJsAppApp
 * @description
 * # bootstrappingAngularJsAppApp
 *
 * Main module of the application..
 */
angular
  .module('bootstrappingAngularJsAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current/:cityID', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when('/forecast/:cityID', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('MainCtrl', ["$scope", "citysearch", "$localStorage", function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;
    $scope.findCities = function(){
           $scope.citiesFound = citysearch.find({
               query: $scope.location
           });
           $scope.searchQuery = $scope.location;
       };
     }]);

'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name bootstrappingAngularJsAppApp.current
 * @description
 * # current
 * Factory in the bootstrappingAngularJsAppApp.
 */
angular.module('bootstrappingAngularJsAppApp')
  .factory('current', ["$resource", function ($resource) {
    // Service logic
    // Public API Here:
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=a1229545e71f4cf85672eee69b3b302e', {}, {
       query: {
         method:'GET',
         params:{
           cityID: '4717560' // Paris, France ID
         },
         isArray:false
       }
     });
   }]);

'use strict';

/**
 * @ngdoc service
 * @name bootstrappingAngularJsAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the bootstrappingAngularJsAppApp.
 */
angular.module('bootstrappingAngularJsAppApp')
  .factory('citysearch', ["$resource", function ($resource) {
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
   }]);

'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('CurrentCtrl', ["$scope", "$routeParams", "current", "$localStorage", function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });
    $scope.saveCity = function(city){
    var cityData = {
        'name': city.name,
        'id': city.id
    };
    if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
    } else {
        // We have already saved some cities.
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].id == cityData.id) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save==true){
            $localStorage.savedCities.push(cityData);
        } else {
            console.log('city already saved');
        }
      }
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name bootstrappingAngularJsAppApp.forecast
 * @description
 * # forecast
 * Factory in the bootstrappingAngularJsAppApp.
 */
angular.module('bootstrappingAngularJsAppApp')
  .factory('forecast', ["$resource", function ($resource) {
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
     }]);

'use strict';

/**
 * @ngdoc function
 * @name bootstrappingAngularJsAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the bootstrappingAngularJsAppApp
 */
angular.module('bootstrappingAngularJsAppApp')
  .controller('ForecastCtrl', ["$scope", "$routeParams", "forecast", function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID
      });
    }]);

angular.module('bootstrappingAngularJsAppApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<h1> Let's play around with views, shall we?</h1> <p>This is the about view.</p> <!-- Stretch goal for making an adding machine --> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <span class=\"label label-success\">{{firstnum + secondnum}}</span> </div>"
  );


  $templateCache.put('views/current.html',
    "<h1>Current Weather for {{currentWeather.name}}</h1> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href=\"#!/forecast/{{cityID}}\" class=\"btn btn-lg btn-primary\">View 16-day Forecast</a></p> <p><button class=\"btn btn-sm btn-primary\" ng-click=\"saveCity(currentWeather)\">Save City</button></p>"
  );


  $templateCache.put('views/forecast.html',
    "<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat=\"prediction in forecastData.list\" class=\"weather-forecast\"> <dt>Forecast for {{prediction.dt*1000 | date:'MMM dd, yyyy'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href=\"#!/current/{{cityID}}\" class=\"btn btn-lg btn-primary\">View Current Weather</a></p>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <h1>Select Your City</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Location: <input type=\"text\" name=\"location\" ng-model=\"location\"> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"findCities()\">Find City</button> </p> </div> <div ng-if=\"searchQuery\"> <p class=\"lead\">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat=\"city in citiesFound.list\"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href=\"/#!/current/{{city.id}}\" class=\"btn btn-lg btn-primary\">View Weather</a></dd> </dl> </div> </p> </div> <div ng-if=\"storage.savedCities\"> <h2>Saved Cities</h2> <ul class=\"saved-cities-list\"> <li ng-repeat=\"city in storage.savedCities\"> <a ng-href=\"#!/current/{{city.id}}\" class=\"btn btn-lg btn-primary\">{{city.name}}</a> </li> </ul> </div>"
  );

}]);
