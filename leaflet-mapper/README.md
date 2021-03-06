# Leaflet Mapper

This miniproject explores mapping different geometric elements and features, with Leaflet.js and the MapBox API:

- `1-simple` - create a simple map
- `2-single-points` - map a single point with a marker
- `3-multiple-points` - map multiple points with markers and variable-sized circles
- `4-lines` - map connecting dashed lines
- `5-geojson-points` - map a single point from internal geoJSON data
- `6-external-geojson` - map multiple points from external geoJSON data, with 2 tile layers
- `7-geojson-linestrings` - map multiple lines from external geoJSON data, with 2 tile layers
- `8-geojson-polygons` - map multiple adjacent polygons from external geoJSON data, with 2 tile layers

All 8 subdirectories have the same structure and similar files. The main difference lies in the `/static/js/logic.js/` file of each subdirectory. This file contains the Leaflet code to map the different geometric elements.

Note: an HTTP server must be run in order to load external geoJSON data.