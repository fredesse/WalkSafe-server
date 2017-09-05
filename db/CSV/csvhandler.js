
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const filePath = path.join(__dirname, "/stagingla.csv");

console.log("filePath: ", filePath);

var csvhandler = function() {
  console.log('line9');

  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log("data", data)
    var result = data.replace(/(,)(?=(?:[^"]|"[^"]*")*$)/g, '#');

    fs.writeFile(filePath, result, 'utf8', function (err) {
       if (err) return console.log(err);
       console.log("file changed")
    });
  });
}

module.exports = csvhandler;