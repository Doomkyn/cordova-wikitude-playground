/* Implementation of AR-Experience (aka "World"). */
var World = {
    /* Location updates, fired every time you call architectView.setLocation() in native environment. */
    locationChanged: function locationChangedFn(lat, lon, alt, acc) {
        console.log(lat, lon, alt, acc);
        document.getElementById('coords').innerHTML = `Latitude: ${lat} Longitude: ${lon}`;
    },

    onError: function onErrorFn(error) {
        alert(error);
    }
};

/* 
    Set a custom function where location changes are forwarded to. There is also a possibility to set
    AR.context.onLocationChanged to null. In this case the function will not be called anymore and no further
    location updates will be received.
*/
AR.context.onLocationChanged = World.locationChanged;