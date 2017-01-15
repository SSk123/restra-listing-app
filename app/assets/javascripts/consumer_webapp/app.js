var app = angular.module('consumerWebapp', ['ui.router', 'templates', 'ngCookies', 'angularUUID2', 'ui.select']);

app.value('MAP',{
	DEFAULT_CENTER:{
	  LAT: '12.925317',
	  LNG: '77.616667'
	}
});
app.value('EVENTS', {
  LOCATION_CHANGED: 'LOCATION_CHANGED'
});
app.value('ZOMATO', {
  API_KEY: '622dfccc65e28a47198cb40fba992719'
});

app.run(['$rootScope', 'CONSTANTS', 'API', '$state', function ($rootScope, CONSTANTS, API, $state) {
    $rootScope.CONSTANTS = CONSTANTS;
    $rootScope.API = API;
    $rootScope.state = $state;
  }
]);
