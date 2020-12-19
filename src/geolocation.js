/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/**
 * Geolocation
 */

const Location = {
    constructor({ watchId = 1, lat, long, radius, places, type }) {
      this.watchId = watchId;
      this.lat = lat;
      this.long = long;
      this.radius = radius;
      this.places = places;
      this.type = type;
    },
    displaySnapshot() {
      if (navigator.geolocation) {
        this.currentPosition()
          .then((coords) => {
          this.lat = coords.latitude;
          this.long = coords.longitude; 
          }).then(() => {
            this.displayMapBox() 
          }).catch((err) => {
            this.errorMessage(err);
          })
      } else {
        this.errorMessage('location not available at the moment');
        // return false;
      }
      // return true;
    },
    watchPosition() {
      this.watchId = navigator.geolocation.watchPosition(({ coords }) => {
        this.lat = coords.latitude;
        this.long = coords.longitude;
        return { lat: coords.latitude, long: coords.longitude };
      });
    },
    currentPosition() {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((pos) => resolve(pos.coords)), 
          (error) => {
            reject(this.errorMessage(this.getErrorBycode(error)))
          }
        })
      },
      getErrorBycode(errorCode) {
        const codes = [
          'PERMISSION_DENIED',
          'POSITION_UNAVAILABLE',
          'TIMOUT',
        ];
        return codes[errorCode - 1];
      },
      clearWatch() {
        navigator.geolocation.clearWatch(this.watchId);
      },
      // with max box api, displayes the user location on a map
      displayMapBox() {
        if (!this.lat || !this.long) {
          return this.errorMessage('no coords found');
        } 
        console.log(this.lat, this.long)

        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRhbnZlcnN0cmFldGUiLCJhIjoiY2tpdDZvZ3o2MHJhYjJ3c2NndXRyOHB6ZCJ9.sMI9XQfEix5O9bVj4C4CPg';
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 9, 
        center: [this.lat, this.long],
        coordinates: [this.lat, this.long],
        });
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
              trackUserLocation: true,
            }),
        );
        return true;
      },
      errorMessage(msg, type = 'log') {
        console.log(msg);
      },
};

export default Location;