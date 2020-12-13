// Map object with center between LAX and SFO and a zoom level of 8
let map = L.map('simple-map').setView([36.1733, -120.1794], 6);

// Add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(map);

// Coordinates for LAX and SFO
let route = [[33.9416, -118.4085], [37.6213, -122.3790]];

// Add a line from LAX to SFO to the map
L.polyline(route, {color: 'red'}).addTo(map);