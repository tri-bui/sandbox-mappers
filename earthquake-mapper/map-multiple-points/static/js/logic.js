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

// Coordinates for the 5 most populated U.S. cities
let cities = [
    {
        location: [40.7128, -74.0059],
        city: "New York City",
        state: "NY",
        population: 8398748
    },
    {
        location: [41.8781, -87.6298],
        city: "Chicago",
        state: "IL",
        population: 2705994
    },
    {
        location: [29.7604, -95.3698],
        city: "Houston",
        state: "TX",
        population: 2325502
    },
    {
        location: [34.0522, -118.2437],
        city: "Los Angeles",
        state: "CA",
        population: 3990456
    },
    {
        location: [33.4484, -112.0740],
        city: "Phoenix",
        state: "AZ",
        population: 1660272
    }
];

// Add a marker for each city to the map
cities.forEach(city => {
    L.marker(city.location).addTo(map);
});

// // Add 25km-radius circle for LA to map
// L.circle([34.0522, -118.2437], {
//     radius: 25e3,
//     color: 'red',
//     fillColor: 'yellow',
//     fillOpacity: 0.25
// }).addTo(map);

// // Add marker for LAX to map
// L.marker([33.9416, -118.4085]).addTo(map);