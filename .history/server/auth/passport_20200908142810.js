const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../database/Schema').User,
  shortid = require('shortid');

  passport.serializeUser( (obj, cb) => {
      cb(null, obj);
  });

  passport.use(localRe)