app.service('DataService', ['$http', '$q', function ($http, $q) {
    this.sendRequest = function (requestOptions, responseKey) {
      var defer = $q.defer();
      $http(requestOptions)
          .then(function (res) {
              var responseData = responseKey ? (res.data && res.data[responseKey]) : res.data;
              defer.resolve(responseData);
          }, function (err) {
              defer.reject(err);
          });
      return defer.promise;
    };
  }
]);