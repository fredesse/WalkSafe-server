// import express from 'express';
// import mapbox from 'mapbox';
// import axios from 'axios';

// const mapboxClient = new mapbox(process.env.MAPBOX_ACCESS_TOKEN);


// var maprouter = express.Router();

// maprouter.get('/search', (req, res) => {
//   const address = req.query.address;
//   mapboxClient.geocodeForward(address, (err) => {
//     if (err) { console.log(err) }
//   })
//     .then( result => {
//       console.log('Return search result', result.entity.features[0]);
//       res.send(result.entity.features[0]);
//     })
// });



// maprouter.get('/crimes', (req, res) => {
//   console.log('hey');
//   res.send('hey');

  // axios.get('http://api.spotcrime.com/crimes.json',
  //   { params: {
  //       lat: req.query.lat,
  //       lon: req.query.lon,
  //       key: process.env.SPOTCRIME_API_KEY,
  //       radius: 0.01
  //     }
  //   })
  //     .then(result => {
  //       // Map crimes into annotation objects
  //       const crimes = result.data.crimes.map(crime => {
  //         return {
  //           coordinates: [crime.lat, crime.lon],
  //           type: 'point',
  //           title: crime.type,
  //           subtitle: `${crime.address} ${crime.date}`,
  //           annotationImage: {
  //             source: { uri: crime.type.toLowerCase() },
  //             height: 45,
  //             width: 45
  //           },
  //           id: crime.cdid.toString()
  //         }
  //       });
  //       // Return array of mapped crimes
  //       console.log(crimes);
  //       res.send(crimes);
  //     });
// })


// module.exports = maprouter;
