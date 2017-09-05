const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/config');
const routes = require('./request-handler.js');

//library for authentication
const session = require('express-session');
// const passport = require('../authentication')


const app = express();
app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());

//Use the request-handler
app.use(routes.handler);

module.exports = app;
