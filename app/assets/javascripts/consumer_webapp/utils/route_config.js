app.config(["$stateProvider", "$urlRouterProvider", 'CONSTANTS', function ($stateProvider, $urlRouterProvider, CONSTANTS) {

  $stateProvider
  .state(CONSTANTS.STATES.LISTING.name, {
    url: '/restaurants',
    templateUrl: 'consumer_webapp/controller/listing.html',
    controllerAs: 'listing',
    controller: 'ListingCtrl'
  })
  $urlRouterProvider.otherwise('/restaurants');
}]);
