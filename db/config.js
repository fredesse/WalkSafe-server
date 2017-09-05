const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('walksafe', process.env.DB_USERNAME || 'postgres', process.env.DB_PASSWORD || 'root', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var db = {};



__dirname = __dirname + '/models'
console.log('THIS IS THE DIRNAME', __dirname);
//reads all the files in the models directory and returns each schema
fs.readdirSync(__dirname)
  .filter(function(file) {
    //console.log('READ FILE file:', file);
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  //enters each schema into the db object
  .forEach(function(file) {
    console.log('forEach file:', file);
    var model = sequelize.import(path.join(__dirname, file));
    console.log('FS model', model);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
