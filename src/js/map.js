function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.520008, lng: 13.404954 },
        zoom: 10,
        styles: [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#70cbbb"
            }]
        }],
    });
    let	marker = new google.maps.Marker({
		position: { lat: 52.5020, lng: 13.404954 },
		map: map,
		icon: {
			url: "img/contact-us/location-symbol.png"
		}
	});
}