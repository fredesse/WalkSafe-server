const fs = require('fs');
const path = require('path');


module.exports = function(db, __dirname, sequelize) {
  fs.readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    //enters each schema into the db object
    .forEach(function(file) {
      var model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  return db;
}
