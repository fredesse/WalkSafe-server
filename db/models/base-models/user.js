module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    access_token: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.hasMany(models.contact);
  };
  return User;
};
