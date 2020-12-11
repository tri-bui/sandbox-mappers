// Map object with center of the U.S. and a zoom level of 4
let map = L.map('simple-map').setView([40.7, -94.5], 4);

// Add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(map);

// Cities data
let cityData = cities;

// Add a marker for each city to the map
cityData.forEach(city => {
    L.marker(city.location).addTo(map);
});