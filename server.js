require('dotenv').config();

var port = process.env.PORT || 1337;
var app = require('./request-handler/index');

app.listen(port, function() {
  console.log('Listening on http://localhost' + port);
});
