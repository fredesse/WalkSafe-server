var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////////
/////////////////////// GET REQUESTS ///////////////////////
////////////////////////////////////////////////////////////

//Get current user's contacts
app.get('/api/contacts', (request, response) => {
  console.log('api/contacts get request');
  response.send('get contacts');
});




//////////////////////////////////////////////////////////////
/////////////////////// POST REQUESTS ///////////////////////
/////////////////////////////////////////////////////////////
app.post('/api/contacts', (request, response) => {
  console.log('api/contacts post request');
  response.send('post contacts');
});


module.exports = app;