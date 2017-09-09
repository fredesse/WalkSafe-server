// import { config } from 'dotenv';
// import app from './request-handler/index';
require('dotenv').config();
const app = require('./request-handler/index');

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
