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
    'Satellite Streets': satStreets
};


// Map object with center of the Toronto and a zoom level of 11
let map = L.map('nb-map', {center: [43.7, -79.3], zoom: 11, layers: [streets]});
L.control.layers(baseMaps).addTo(map); // layer control

// Toronto neighborhood geoJSON data
let neighborhoods = 'https://raw.githubusercontent.com/tri-bui/sandbox-mappers/main/leaflet-mapper/8-geojson-polygons/static/js/torontoNeighborhoods.json';

// Polygon styling
let polyStyle = {color: 'red', fillColor: 'yellow', weight: 4, opacity: 0.8};

// Add Toronto neighborhoods to map
d3.json(neighborhoods).then(data => {
    L.geoJSON(data, {
        style: polyStyle, 
        onEachFeature: (feat, layer) => {
            layer.bindPopup(`<h2>${feat.properties.AREA_NAME}</h2>`);
        }
    }).addTo(map);
});