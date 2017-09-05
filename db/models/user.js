module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    accessToken: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Contact);
  }
  return User;
}
