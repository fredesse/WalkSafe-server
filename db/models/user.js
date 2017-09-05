const User = db.define('User', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  avatarUrl: Sequelize.STRING,
  accessToken: Sequelize.STRING
}, {
  classMethods: {
    associate: function(models) {
      User.hasMany(models.Contact, {
        foreignKey: 'userId',
        as: 'contacts'
      });
    }
  }
});

exports.module = User;
