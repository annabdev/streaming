const express = require('express'),
      router = express.Router(),
      passport = require('passport');

router.get('/',
     require('connect-ensure-login').ensureLoggedOut(),
     (req, res) => {
         res.render('register', {
             user : null,
             errors
         })
     })      