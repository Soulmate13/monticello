function initMap() { } // now it IS a function and it is in global
$(() => {
    initMap = function () {
        // your code like...
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.665557, lng: -73.823681 },
            zoom: 16,
            mapTypeControl: false,
            disableDefaultUI: true
        });
        // and other stuff...
    }
    initMap();
})
