function initMap() {
	// add your code here
	L.mapquest.key = 'YOUR-KEY-HERE';

	//'map' regeres to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.titleLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	//add marker to the map
	L.marker ([32.88, -117.236]).addTo(map);
	
}