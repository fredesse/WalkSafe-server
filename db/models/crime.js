module.exports = function(sequelize, DataTypes) {
  const Crime = sequelize.define('crime', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    crime_type: DataTypes.STRING,
    crime_time: DataTypes.DATE,
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
    crime_identifier: DataTypes.INTEGER,
    geometry: DataTypes.GEOMETRY  //postGIS column.  Possibly add 'srid' here
  });
  return Crime;
}
