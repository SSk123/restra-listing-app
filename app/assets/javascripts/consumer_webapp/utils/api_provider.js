app.provider('API', ['CONSTANTS',function (CONSTANTS) {
  var apiMap = {};
  apiMap[CONSTANTS.STATES.LISTING.name] = {
    get_restaurant_list: {
      type: 'GET',
      api_url: 'https://developers.zomato.com/api/v2.1/geocode',
      params: {
        'lat':'lat',
        'lon': 'lon'
      },
      headers: {
        "content-type": "application/json",
        "user-key": "622dfccc65e28a47198cb40fba992719"
      },
      response_key:'nearby_restaurants',
      display_keys: ['location', 'name', 'cuisines', 'price_range', 'featured_image', 'photos_url', 'has_online_delivery', 'book_url', 'user_rating']
    }
  };
  this.$get = function() {
    return apiMap;
  };
}])
