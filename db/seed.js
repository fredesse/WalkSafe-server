const dotenv = require('dotenv');
const db = require('./config.js');

console.log('Seeding database');


db.User.create({
  username: 'Fantastic4',
  email: 'fantastic4@gmail.com',
  avatarUrl: 'https://avatars2.githubusercontent.com/u/31486494?v=4&s=200'
  accessToken: 'abc123'
  Contacts: [
    {
      contactName: 'Human Torch',
      phoneNumber: '123-456-7890'
    },
    {
      contactName: 'The Thing',
      phoneNumber: '000-000-0000'
    },
    {
      contactName: 'Mr. Fantastic',
      phoneNumber: '111-111-2222'
    },
    {
      contactName: 'Ms. Fantastic',
      phoneNumber: '222-222-2222'
    }
  ]
}, {
  include: [db.Contact]
})
.then(function() {
  db.City.create({
    
  })
})
