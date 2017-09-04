require('dotenv').config();

var port = process.env.PORT || 1337;
var app = require('./routes/index');

app.listen(port, function() {
  console.log('Listening on http://localhost' + port);
});
