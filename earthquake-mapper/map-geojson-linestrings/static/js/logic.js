// Street layer
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
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
    Light: light,
    Dark: dark
};


// Map object with center of the Toronto and a zoom level of 2
let map = L.map('simple-map', {center: [44.0, -80.0], zoom: 2, layers: [light]});

// Add base layer to map
L.control.layers(baseMaps).addTo(map);


// Toronto routes geoJSON data
let routes = 'https://raw.githubusercontent.com/tri-bui/sandbox-mappers/main/earthquake-mapper/map-geojson-linestrings/static/js/torontoRoutes.json';

// Add Toronto routes to map
d3.json(routes).then(data => {
    L.geoJSON(data, {style: {
        color: 'yellow',
        weight: 2,
        opacity: 0.5
    }, onEachFeature: (feat, layer) => {
        let props = feat.properties;
        layer.bindPopup(
            `<h2>${props.src} to ${props.dst} (${props.stops} stops)</h2>`
        );
    }}).addTo(map);
});