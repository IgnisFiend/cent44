		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "-37.8799184", "longitude":"-67.7960689", "icon": "img/map-marker.png"}

			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: 'La Pampa 489, 8307 Catriel, Río Negro',
			markers	: myMarkers
		});

