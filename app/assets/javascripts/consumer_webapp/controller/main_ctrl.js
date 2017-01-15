app.controller('MainCtrl', ['CONSTANTS', '$state', '$rootScope', 'EVENTS', function (CONSTANTS, $state, $rootScope, EVENTS) {
    var self = this;
    var autocomplete;
 	var searchLocation = document.getElementById('searchLocation');
    var options = {
    	types: ['geocode'],
		componentRestrictions: {country: 'in'}
	};
	
	var init = function () {
		autocomplete = new google.maps.places.Autocomplete(searchLocation, options);
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
		    fetchLatLng();
		});
	}

	var fetchLatLng = function () {
		var location ={};
		var place = autocomplete.getPlace();
		location.lat = place.geometry.location.lat();
		location.lng = place.geometry.location.lng();
		$rootScope.$broadcast(EVENTS.LOCATION_CHANGED, {
            location: location
        });
	}
	
	google.maps.event.addDomListener(window, 'load', init);
}]);