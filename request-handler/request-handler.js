//This file exports the api and authentication route as required by the request-handler/index.js

const api = require('./routes/api.js');
const auth = require('./routes/auth.js');
const path = require('path');

console.log('this is the path:', path);

exports.handler = function handler(req, res) {
  const urlParts = req.path.split('/');
  if (urlParts[1] === 'API' && api[req.method].hasOwnProperty(urlParts[2])) {

  //Authentication route
  } else if (urlParts[1] === 'auth' && auth[req.method].hasOwnProperty(urlParts[2])) {
    auth[req.method][urlParts[2]](req, res);

  //If the request is neither API nor auth send a 404
  } else {
    res.statusCode = 404;
    res.end('Nothing to see here');
  }
}
