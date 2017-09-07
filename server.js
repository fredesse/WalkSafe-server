require('dotenv').config();

const port = process.env.PORT || 1337;
const app = require('./request-handler/index');

app.listen(port, function() {
  console.log('Listening on http://localhost' + port);
});
