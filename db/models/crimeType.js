module.exports = function(sequelize, DataTypes) {
  const CrimeType = sequelize.define('CrimeType', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    type: SEQUELIZE.STRING,
  });
  return CrimeType;
}
