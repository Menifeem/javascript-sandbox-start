
// LeafLet site: https://leafletjs.com/index.html


// Initializing a map using Leaflet(L) object > Setting a view to [...] > & Zoom Level (13)
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Setting marker to where I am
const marker = L.marker([0, 0]).addTo(map);                                         // "0, 0" set at midder for the marker

// Get location and set marker coordinate to our location
navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;

    marker.setLatLong([lat, long]).update();

    // set view (1-15 is low to highest for zoom)
    map.setView([lat, long], 13);

    // Add popup
    marker.bindPopup('<strong>Hello World</strong> <br> This is my location!');
})


// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();