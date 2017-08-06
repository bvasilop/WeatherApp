angular.module('bootstrappingAngularJsAppApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<h1> Let's play around with views, shall we?</h1> <p>This is the about view.</p> <!-- Stretch goal for making an adding machine --> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <span class=\"label label-success\">{{firstnum + secondnum}}</span> </div>"
  );


  $templateCache.put('views/current.html',
    "<h1>Current Weather for {{currentWeather.name}}</h1> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href=\"#!/forecast/{{cityID}}\" class=\"btn btn-lg btn-primary\">View 16-day Forecast</a></p> <p><button class=\"btn btn-sm btn-primary\" ng-click=\"saveCity(currentWeather)\">Save City</button></p>"
  );


  $templateCache.put('views/forecast.html',
    "<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat=\"prediction in forecastData.list\" class=\"weather-forecast\"> <dt>Forecast for {{prediction.dt*1000 | date:'MMM dd, yyyy'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href=\"#!/current/{{cityID}}\" class=\"btn btn-lg btn-primary\">View the Current Weather</a></p>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <h1>Select Your City</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Location: <input type=\"text\" name=\"location\" ng-model=\"location\"> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"findCities()\">Find City</button> </p> </div> <div ng-if=\"searchQuery\"> <p class=\"lead\">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat=\"city in citiesFound.list\"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href=\"/#!/current/{{city.id}}\" class=\"btn btn-lg btn-primary\">View Weather</a></dd> </dl> </div> </p> </div> <div ng-if=\"storage.savedCities\"> <h2>Saved Cities</h2> <ul class=\"saved-cities-list\"> <li ng-repeat=\"city in storage.savedCities\"> <a ng-href=\"#!/current/{{city.id}}\" class=\"btn btn-lg btn-primary\">{{city.name}}</a> </li> </ul> </div>"
  );

}]);
