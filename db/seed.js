const dotenv = require('dotenv');
const db = require('./config.js');

console.log('Seeding database');

db.sequelize.sync({
  force:true
})
.then(() => {
    db.User.create({
      username: 'Fantastic4',
      email: 'fantastic4@gmail.com',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/31486494?v=4&s=200',
      accessToken: 'abc123',
      Contacts: [
        {
          contactName:'Human Torch',
          phoneNumber: 1234567890
        },
        {
          contactName: 'The Thing',
          phoneNumber: 0000000000
        },
        {
          contactName: 'Mr. Fantastic',
          phoneNumber: 1111112222
        },
        {
          contactName: 'Ms. Fantastic',
          phoneNumber: 2222222222
        }
      ]
    }, {
      include: [db.Contact]
    })
    .then(() => {
      db.CrimeType.bulkCreate(
        [
          { type: "CRIMINAL HOMICIDE" },
          { type: "FORCIBLE RAPE" },
          { type: "ROBBERY" },
          { type: "AGGRAVATED ASSAULT" },
          { type: "BURGLARY" },
          { type: "LARCENY THEFT" },
          { type: "GRAND THEFT AUTO" },
          { type: "ARSON" },
          { type: "FORGERY" },
          { type: "FRAUD AND NSF CHECKS" },
          { type: "SEX OFFENSES FELONIES" },
          { type: "SEX OFFENSES MISDEMEANORS" },
          { type: "NON-AGGRAVATED ASSAULTS" },
          { type: "WEAPON LAWS" },
          { type: "OFFENSES AGAINST FAMILY" },
          { type: "NARCOTICS" },
          { type: "LIQUOR LAWS" },
          { type: "DRUNK / ALCOHOL / DRUGS" },
          { type: "DISORDERLY CONDUCT" },
          { type: "VAGRANCY" },
          { type: "GAMBLING" },
          { type: "DRUNK DRIVING VEHICLE / BOAT" },
          { type: "VEHICLE / BOATING LAWS" },
          { type: "VANDALISM" },
          { type: "WARRANTS" },
          { type: "RECEIVING STOLEN PROPERTY" },
          { type: "FEDERAL OFFENSES W/O MONEY" },
          { type: "FEDERAL OFFENSES WITH MONEY" },
          { type: "FELONIES MISCELLANEOUS" },
          { type: "MISDEMEANORS MISCELLANEOUS" }
        ]
      )
      .then(() => {
        db.sequelize.close();
      })
    })
})

