// This file handles GET and POST requests for map related routes
import axios from 'axios';
const mapbox = require('mapbox');
const mapboxClient = new mapbox(process.env.MAPBOX_ACCESS_TOKEN);

module.exports = {
  GET: {
    // Retrieve geographical coordinates of requested address
    search: function getCoordinates(req) {
      const address = req.query.address;

      return mapboxClient.geocodeForward(address, function(err) {
        if (err) { console.log(err); }
      })
        .then(res => {
          // Return closest search result
          console.log(res.entity.features[0]);
          return res.entity.features[0];
        });
    },
    crimes: function getCrimes(req) {
      return axios.get('http://api.spotcrime.com/crimes.json', {params: {
        lat: req.query.lat,
        lon: req.query.lon,
        key: process.env.SPOTCRIME_API_KEY,
        radius: 0.01
      }})
        .then(res => {
          const crimes = res.data.crimes.map(crime => {
            return {
              coordinates: [crime.lat, crime.lon],
              type: 'point',
              title: crime.type,
              subtitle: `${crime.address} ${crime.date}`,
              annotationImage: {
                source: { uri: crime.type.toLowerCase() },
                height: 45,
                width: 45
              },
              id: crime.cdid.toString()
            }
          });
          console.log(crimes);
          return crimes;
        });
    }
  }
}
