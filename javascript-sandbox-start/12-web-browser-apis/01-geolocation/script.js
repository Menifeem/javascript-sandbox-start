// Geolocation - The Geolocation API is a service that allows web applications to obtain the geographical location of a device
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// The Geolocation API is accessed via a call to navigator.geolocation; this will cause the user's browser to ask them for permission to access their location data.

// Geolocation.getCurrentPosition(): Retrieves the device's current location.
// Geolocation.watchPosition(): Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.

// getCurrentPosition()
function curSuccess(pos) {                                                      // Taking in a position(pos) and then we console log it
    const cords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longtude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {                                                        // Taking in an error(err) object and then we log a syntax
    console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {                                                               // Here we are just setting up empty options
    //Different options we can have
    enableHighAccuracy: true,                                                   // Will use gps if available

    // Use timeout
    timeout: 5000,                                                              // time to wait to stop trying for location

    // Maximum age
    maximumAge: 0,                                                             // Do not use a chahed position

};                                                             


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
navigator.geolocation.getCurrentPosition(curSuccess, curError, options);






// watchPosition() / this is going to fire off when our location changes.
const target = {
    latitude: 41.3638292,
    longitude: -71.3636892
}

function watchSuccess(pos) {                                                      // Taking in a when the position changes
    const cords = pos.coords;

    if(target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('You have reached your destination');
        navigator.geolocation.clearWatch(id);                                           // 'id' is called as the location is cleared for the new when moving (line 75)
    }
}

function watchError(err) {                                                        // Taking in an error(err) object and then we log a syntax
    console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {                                                               // Here we are just setting up empty options
    //Different options we can have
    enableHighAccuracy: true,                                                   // Will use gps if available

    // Use timeout
    timeout: 5000,                                                              // time to wait to stop trying for location

    // Maximum age
    maximumAge: 0,                                                             // Do not use a chahed position

};                                                             


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
