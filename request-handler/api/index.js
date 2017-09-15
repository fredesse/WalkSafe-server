import express from 'express';
import mapbox from 'mapbox';
import axios from 'axios';
// import maprouter from './map.js';

const mapboxClient = new mapbox(process.env.MAPBOX_ACCESS_TOKEN);


var router = express.Router();

router.get('/search', (req, res) => {
  const address = req.query.address;
  mapboxClient.geocodeForward(address, (err) => {
    if (err) { console.log(err) }
  })
    .then( result => {
      console.log('Return search result', result.entity.features[0]);
      res.send(result.entity.features[0]);
    })
});

var crimeSpot = function(input) {
  return new Promise ((resolve, reject) => {
    axios.get('http://api.spotcrime.com/crimes.json',
      { params: {
          lat: input.lat,
          lon: input.lon,
          key: process.env.SPOTCRIME_API_KEY,
          radius: 0.01
        }})
      .then(result => {
        // Map crimes into annotation objects
        const crimes = result.data.crimes.map(crime => {
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
        // Return array of mapped crimes
        console.log('crimes', crimes);
        resolve(crimes);
      })
      .catch(err => {
        console.log('line 52 ', err);
        resolve(error);
      });
  })
}

router.get('/crimes', (req, res) => {
  console.log('hey');
  crimeSpot(req.query)
    .then(crimes => {
      console.log(crimes)
      res.send(crimes);
    })
    .catch(err => res.status(404).send('Bad Request'))
})


module.exports = router;
