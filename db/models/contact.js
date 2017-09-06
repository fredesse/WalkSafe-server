module.exports = function(sequelize, DataTypes) {
  const Contact = sequelize.define('contact', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    contact_name: DataTypes.STRING,
    phone_number: DataTypes.DOUBLE,
  }, {
    classMethods: {
      associate: function(models) {
        Contact.belongsTo(models.user, {
          foreignKey: 'user_id',
          as: 'user'
        });
      }
    }
  });
  return Contact;
}
