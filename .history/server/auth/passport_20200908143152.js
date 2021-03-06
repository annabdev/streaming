const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../database/Schema').User,
  shortid = require('shortid');

  passport.serializeUser( (obj, cb) => {
      cb(null, obj);
  });

  passport.use('localRegister', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
  },
  (req, email, password, done) => {
      User.findOne({$or: [{email: email}, {username: req.body.username}]}, (err, user) => {
          if (err)
            return done(err);
          if (user) {
              if (user.email === email) {
                  req.flash('email', 'Email is already taken!');
              }
              if (user.username === req.body.username) {
                  req.flash('username', 'Username is already taken');
              }
              return done()
          }  
      })
  }))