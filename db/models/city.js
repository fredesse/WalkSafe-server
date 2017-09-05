module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define('City', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    cityName: Sequelize.STRING
  });
  return City;
}
