'use strict';

var districtMap;

window.initMap = function initMap() {
  //have to bind to global, sorry for async map loading
  if (!document.getElementById('district-map')) return null;
  districtMap = new google.maps.Map(document.getElementById('district-map'), {
    center: { lat: 35.39, lng: -95.80 },
    zoom: 7,
    disableDefaultUI: true
  });

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1pnkO_nqmN0TBBgjsjDRKEt5nexnt0l3IRb8TD6c',
      where: "'SS-NN' = 'OK-02'"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#005714',
        fillOpacity: 0.6
      }
    }]
  });
  layer.setMap(districtMap);
};