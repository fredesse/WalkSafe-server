//This file handles GET and POST req'uests for map related routes

const mapbox = require('mapbox');
const mapboxClient = new mapbox(process.env.MAPBOX_ACCESS_TOKEN);

module.exports = {
  GET: {
    //Retrieve geographical coordinates of requested address
    search: function getCoordinates(req) {
      console.log('map/search get request', req.query);
    }
  }
}
