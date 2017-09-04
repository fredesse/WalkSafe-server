const express = require('express');
const bodyParser = require('body-parser');

//library for authentication
const session = require('express-session');
// const passport = require('../authentication')

const app = express();
app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());


//Save sessions
// app.use(session({
//   secret: 'keep safe yo',
//   resave: false,
//   saveUninitialized: true,
// }));
//
// //Set server to use initialized passport from authentication module
// app.use(passport.initialize());
// app.use(passport.session());

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
