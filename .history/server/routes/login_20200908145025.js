const express = require('express'),
      router = express.Router(),
      passport = require('passport');

router.get('/',
    require('connect-ensure-login').)     