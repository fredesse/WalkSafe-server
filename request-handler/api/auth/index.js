import { google, facebook } from './../../../config';
import express from 'express';
// UNCOMMENT THIS FOR TESTING AUTHENTICATION
const router = express.Router();
const bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');

const transformFacebookProfile = profile => ({
  name: profile.name,
  avatar: profile.picture.data.url,
});

const transformGoogleProfile = profile => ({
  name: profile.displayName,
  avatar: profile.image.url,
  // maybe add email here
});


// Register Facebook Passport strategy
passport.use(new FacebookStrategy(facebook,
  // Called when user authorizes access to their profile
  async (accessToken, refreshToken, profile, done)
  // Return done callback and pass the profile to the transform callback
    => done (null, transformFacebookProfile(profile._json))
));

passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done)
    => done (null, transformGoogleProfile(profile._json))
));

// serializeUser into sessions
passport.serializeUser((user, done) => done(null, user));

// deserialize user from sessions
passport.deserializeUser((user, done) => done(null, user));


// THIS IS A BAD WAY TO SAVE SESSIONS
// USE A DIFFERENT METHOD FOR PRODUCTION

router.use(session({
  secret: 'In da hood',
  resave: false,
  saveUninitialized: true,
}));


// Initialize Passport
router.use(passport.initialize());
router.use(passport.session());

// Start body parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// UNCOMMENT THIS AUTH ROUTE FOR TESTING
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/facebook' }),
  (req, res) => res.redirect('walksafe://login?user=' + JSON.stringify(req.user)));

router.get('/google', passport.authenticate('google', { scope: ['profile']}), () => console.log('81'));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  (req, res) => {
    console.log('86');
    console.log('res',res);
    return res.redirect('walksafe://login?user=' + JSON.stringify(req.user));
  });


// UNCOMMENT ENDS HERE
module.exports = router;