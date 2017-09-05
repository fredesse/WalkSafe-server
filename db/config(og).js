const Sequelize = require('sequelize');
const db = new Sequelize('walksafe', process.env.DB_USERNAME || 'postgres', process.env.DB_PASSWORD || 'root', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = db.define('User', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    accessToken: Sequelize.STRING
  });
  const Contact = db.define('Contact', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    contactName: Sequelize.STRING,
    phoneNumber: Sequelize.INTEGER,
  });
  const City = db.define('City', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    cityName: Sequelize.STRING
  });
  const Crime = db.define('Crime', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    crimeTypeId: Sequelize.INTEGER,
    crimeTime: Sequelize.STRING,
    longitude: Sequelize.DOUBLE,
    latitude: Sequelize.DOUBLE
  });

  const CrimeType = db.define('CrimeType', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    type: SEQUELIZE.STRING,
  });

  City.hasMany(Crime);
  User.hasMany(Contact);

  db.sync();

  module.exports = {
    db: db,
    User: User,
    Contact: Contact,
    City: City,
    Crime: Crime
  };
