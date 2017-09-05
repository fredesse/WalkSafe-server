module.exports = function(sequelize, DataTypes) {
  const CrimeType = sequelize.define('CrimeType', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: DataTypes.STRING,
  });
  return CrimeType;
}
