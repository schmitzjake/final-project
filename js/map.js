

/**
 * Adds markers to the map
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var dallasMarker = new H.map.Marker({lat:32.7767, lng:-96.7970});
    map.addObject(dallasMarker);

    var sloveniaMarker = new H.map.Marker({lat:46.0569, lng: 14.5058});
    map.addObject(sloveniaMarker);

    var madridMarker = new H.map.Marker({lat:40.4168, lng: 3.7038});
    map.addObject(madridMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "F55NbsyaE-U2bRGywyaWYFxHhoGe_yohh0ASLReHrbc"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:0, lng:0},
  zoom: 1,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}
