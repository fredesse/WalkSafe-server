const City = db.define('City', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  cityName: Sequelize.STRING
});
