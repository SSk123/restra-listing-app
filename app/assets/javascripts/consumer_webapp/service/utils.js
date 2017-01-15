app.service('Utils', ['API', function (API) {
  this.getRequestOptions = function (options) {
      var result = {};
      var paramOption;
      var apiOptions = API[options.controller][options.api];
      var requestOptions = {
          method : apiOptions.type,
          url  : apiOptions.api_url,
          headers: apiOptions.headers
      };
      if (apiOptions.params) {
          var params = {};
          paramOption = (apiOptions.type == 'GET' ? 'params' : 'data');
          for(key in apiOptions.params){
              if(apiOptions.params.hasOwnProperty(key) && typeof(options.details[key]) !== undefined)
                  params[key] = options.details[key];
          }
          requestOptions[paramOption] = params;
      }
      result.requestOptions = requestOptions;
      result.responseKey = apiOptions.response_key;
      result.displayKeys = apiOptions.display_keys;
      return result;
  };
}]);
