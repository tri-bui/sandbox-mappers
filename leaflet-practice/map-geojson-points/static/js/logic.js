// Map object with center of SFO and a zoom level of 10
let map = L.map('simple-map').setView([37.5, -122.5], 10);

// Add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
}).addTo(map);

// SFO GeoJSON data
let sfo = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "id": "3469",
            "name": "San Francisco International Airport",
            "city": "San Francisco",
            "country": "United States",
            "faa": "SFO",
            "icao": "KSFO",
            "alt": "13",
            "tz-offset": "-8",
            "dst": "A",
            "tz": "America/Los_Angeles"
        }, 
        "geometry": {
            "type": "Point",
            "coordinates": [-122.375, 37.61899948120117]
        }
    }
]};

// Add a marker with popup for SFO
L.geoJSON(sfo, {pointToLayer: (feat, coords) => {
    let props = feat.properties;
    return L.marker(coords).bindPopup(
        '<h3>' + props.name + ' (' + props.faa + ')' + '</h3><hr />' +
        "<h3 align='center'>" + props.city + ', ' + props.country + '</h3>'
    );
}}).addTo(map);

// // Or using a different method
// L.geoJSON(sfo, {onEachFeature: (feat, layer) => {
//     let props = feat.properties;
//     layer.bindPopup(
//         '<h3>' + props.name + ' (' + props.faa + ')' + '</h3><hr />' +
//         "<h3 align='center'>" + props.city + ', ' + props.country + '</h3>'
//     );
// }}).addTo(map);