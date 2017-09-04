const Contact = db.define('Contact', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  contactName: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
}, {
  classMethods: {
    associate: function(models) {
      Contact.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
});
