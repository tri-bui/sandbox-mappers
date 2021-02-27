/*** Map ***/

// Map object
let map = L.map('eq-map', {center: [35, 20], zoom: 2, layers: [streets]});

// Add base layer and overlays to map
L.control.layers(basemaps, overlays).addTo(map);


/*** Earthquake Layer ***/

// Earthquake geoJSON data
let earthquakes7d = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

/**
 * Get a color code for the marker depending on the earthquake magnitude.
 * @param {number} mag - earthquake magnitude
 * @return {str} - color hex code
 */
function getColor(mag) {
    if (mag > 5) {return '#ea2c2c';}
    if (mag > 4) {return '#ea822c';}
    if (mag > 3) {return '#ee9c00';}
    if (mag > 2) {return '#eecc00';}
    if (mag > 1) {return '#d4ee00';}
    return '#98ee00';
}

// Add earthquake layer to map
d3.json(earthquakes7d).then(data => {
    L.geoJSON(data, {pointToLayer: (feat, coords) => {
        let props = feat.properties;

        // Circle marker style
        let style = {
            radius: (props.mag + 0.1) * 4,
            color: getColor(props.mag),
            fillOpacity: 0.8,
            weight: 1,
            stroke: true
        }

        return L.circleMarker(coords, style).bindPopup(
            `<h2 align="center">Magnitude: ${props.mag}</h2><hr />` +
            `<h3>Location: ${props.place}</h3>`
        );
    }}).addTo(earthquakes); // add data to earthquake layer
    earthquakes.addTo(map); // add earthquake layer to map
});


/*** Boundary Layer ***/

// Tectonic plate geoJSON data
let boundaries02 = 'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json';

// Add boundary layer to map
d3.json(boundaries02).then(data => {
    L.geoJSON(data, {
        style: {color: 'red', weight: 2}, 
        onEachFeature: (feat, layer) => {
            layer.bindPopup(feat.properties.Name + ' Boundary');
        }
    }).addTo(boundaries);
    boundaries.addTo(map); // add boundary layer to map
});


/*** Legend ***/

// Legend object
let legend = L.control({position: 'bottomright'});

// Add legend to map
legend.onAdd = () => {

    // Create HTML div for legend
    let div = L.DomUtil.create('div', 'legend');
    div.innerHTML = '<h6 align="center">Earthquake<br />Magnitude</h6>';

    // Create legend labels
    for (let m = 0; m <= 5; m++) {
        div.innerHTML += `<p><i style="background: ${getColor(m)}"></i>` +
            m + (m < 5 ? ` - ${m + 1}` : '+') + '</p>';
    };

    return div;
};
legend.addTo(map); // add legend to map