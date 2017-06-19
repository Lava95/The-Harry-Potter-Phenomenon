mapboxgl.accessToken = 'pk.eyJ1IjoibGF2YTk1IiwiYSI6ImNqM3F2YXExYjAxZmMzM2xqcTUyMnpzc2kifQ.kO50q7B1SxPhXw98_uFLwQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 12,
    center: [-122.447303, 37.753574]
});

map.on('load', function () {

    map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
        },
        'source-layer': 'sf2010',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 1.75,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using data-driven styles
            'circle-color': {
                property: 'ethnicity',
                type: 'categorical',
                stops: [
                    ['White', '#fbb03b'],
                    ['Black', '#223b53'],
                    ['Hispanic', '#e55e5e'],
                    ['Asian', '#3bb2d0'],
                    ['Other', '#ccc']]
            }
        }
    });
});