// Map object with center of the U.S. and a zoom level of 4.5
let map = L.map('itin-map').setView([38, -93], 4);

// Add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(map);

// Coordinates for LAX, SFO, SLC, and SEA
let route = [
    [47.4502, -122.3088],
    [40.7899, -111.9791],
    [37.6213, -122.3790],
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Add a line for the route to the map
L.polyline(route, {
    color: 'blue',
    weight: 4,
    opacity: 0.5,
    dashArray: '10'
}).addTo(map);