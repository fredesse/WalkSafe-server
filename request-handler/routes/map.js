//This file handles GET and POST req'uests for map related routes

const mapbox = require('mapbox');
const mapboxClient = new mapbox(process.env.MAPBOX_ACCESS_TOKEN);

module.exports = {
  GET: {
    //Retrieve geographical coordinates of requested address
    search: function getCoordinates(req) {
      const address = req.query.address;
      console.log('map/search get request', address);

      return mapboxClient.geocodeForward(address, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          console.log(data.features[0].geometry);
          //Return object containing coordinates and annotation type
          data.features[0].geometry;
        }
      });
    }
  }
}
