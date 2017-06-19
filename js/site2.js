'use strict';

/* global mapboxgl */
mapboxgl.accessToken = 'pk.eyJ1IjoidHJpc3RlbiIsImEiOiJiUzBYOEJzIn0.VyXs9qNWgTfABLzSI3YcrQ';

var sidebar = document.getElementById('sidebar');

var ethnicities = [{
  group: 'Asian',
  hex: '#3bb2d0'
}, {
  group: 'Black',
  hex: '#888BCA'
}, {
  group: 'Hispanic',
  hex: '#e55e5e'
}, {
  group: 'White',
  hex: '#fbb03b'
}, {
  group: 'Other',
  hex: '#ccc'
}];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 12,
  center: [-122.447303, 37.753574]
});

ethnicities.map(function(d) {
  d.active = true;

  var item = document.createElement('div');
  item.className = 'dark';

  var toggle = document.createElement('button');
  toggle.className = 'button col12 icon check unround';
  toggle.textContent = d.group;
  toggle.style.backgroundColor = d.hex;

  toggle.addEventListener('click', function() {
    d.active = d.active ? false : true;
    if (d.active) {
      toggle.style.backgroundColor = d.hex;
      toggle.classList.add('check', 'icon');
    } else {
      toggle.classList.remove('check', 'icon');
      toggle.style.backgroundColor = 'rgba(255,255,255,0.1)';
    }

    map.setFilter('population', ethnicities.filter(function(d) {
        return d.active;
      }).reduce(function(memo, d) {
        memo.push(d.group);
        return memo;
      }, ['in', 'ethnicity'])
    );
  });

  item.appendChild(toggle);
  sidebar.appendChild(item);
  return d;
});

map.on('load', function() {
  map.addSource('population', {
    type: 'vector',
    url: 'mapbox://examples.8fgz4egr'
  });

  map.addLayer({
    'id': 'population',
    'type': 'circle',
    'source': 'population',
    'source-layer': 'sf2010',
    'paint': {
      'circle-radius': {
        'base': 1.75,
        'stops': [[12, 2], [22, 180]]
      },
      'circle-color': {
        property: 'ethnicity',
        type: 'categorical',
        stops: ethnicities.map(function(d) {
          return [d.group, d.hex];
        })
      }
    }
  }, 'water-label');
});