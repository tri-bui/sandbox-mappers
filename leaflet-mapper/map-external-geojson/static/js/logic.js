// Street layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// Dark layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
});

// Base layer holding both map layers
let baseMaps = {
    Street: streets,
    Dark: dark
};


// Map object with center of the world and a zoom level of 2
let map = L.map('airport-map', {center: [30, 30], zoom: 2, layers: [streets]});

// Add base layer to map
L.control.layers(baseMaps).addTo(map);


// Airport geoJSON data
let airportData = 'https://raw.githubusercontent.com/tri-bui/sandbox-mappers/main/leaflet-practice/map-external-geojson/static/js/majorAirports.json';

// Add airports to map
d3.json(airportData).then(data => {
    L.geoJSON(data, {onEachFeature: (feat, layer) => {
        let props = feat.properties;
        layer.bindPopup(
            `<h3>${props.name} (${props.faa})</h3><hr />` + 
            `<h3 align="center">${props.city}, ${props.country}</h3>`
        );
    }}).addTo(map);
});