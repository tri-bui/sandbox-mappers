// Map object with center of the Los Angeles, CA and a zoom level of 10
let map = L.map('simple-map').setView([34.0522, -118.2437], 10);

// Add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(map);

// Add 25km-radius circle for LA to map
L.circle([34.0522, -118.2437], {
    radius: 25e3,
    color: 'red',
    fillColor: 'yellow',
    fillOpacity: 0.25
}).addTo(map);

// Add marker for LAX to map
L.marker([33.9416, -118.4085]).addTo(map);