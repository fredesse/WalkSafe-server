module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define('City', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cityName: DataTypes.STRING
  });
  return City;
}
