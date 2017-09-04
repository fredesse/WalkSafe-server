const passport = require('passport');
const GoogleStrategy = require('passport-google').Strategy;

////add database here for saving usernames and contacts
//const db = require('../db');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  }
))

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  const userInfo = {
    displayName: user.username,
    email: user.email,
    avatarUrl: user.avatarUrl
  }
  done(null, userInfo);
});

exports.passport = passport;
