// Street layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// Satellite street layer
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// Base layer holding both map layers
let baseMaps = {
    'Streets': streets,
    'Satellite': satStreets
};


// Map object with center of the U.S.
let map = L.map('simple-map', {center: [39.5, -98.5], zoom: 3, layers: [streets]});

// Add base layer to map
L.control.layers(baseMaps).addTo(map);


// Earthquakes geoJSON data
let earthquakes7d = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Add earthquakes to map
d3.json(earthquakes7d).then(data => {
    L.geoJSON(data, {pointToLayer: (feat, coords) => {
        let props = feat.properties;

        // Circle marker style
        let style = {
            radius: (props.mag + 0.2) * 5,
            stroke: true,
            weight: 0.5,
            color: 'orange',
            fillOpacity: 0.8
        }

        return L.circleMarker(coords, style).bindPopup(
            `<h2 align="center">Magnitude: ${props.mag}</h2><hr />` +
            `<h3>Location: ${props.place}</h3>`
        );
    }}).addTo(map);
});


// // Add Toronto neighborhoods to map
// d3.json(neighborhoods).then(data => {
//     L.geoJSON(data, {style: {
//         color: 'red',
//         fillColor: 'yellow',
//         weight: 4,
//         opacity: 0.8
//     }, onEachFeature: (feat, layer) => {
//         let props = feat.properties;
//         layer.bindPopup(`<h2>${props.AREA_NAME}</h2>`);
//     }}).addTo(map);
// });