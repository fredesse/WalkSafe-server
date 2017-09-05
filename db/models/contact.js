module.exports = function(sequelize, DataTypes) {
  const Contact = sequelize.define('Contact', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    contactName: DataTypes.STRING,
    phoneNumber: DataTypes.DOUBLE,
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
  return Contact;
}
