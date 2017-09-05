module.exports = function(sequelize, DataTypes) {
  const Crime = sequelize.define('Crime', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    crimeType: DataTypes.STRING,
    crimeTime: DataTypes.STRING,
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    geometry: DataTypes.GEOMETRY  //postGIS column.  Possibly add 'srid' here
  });
  return Crime;
}
