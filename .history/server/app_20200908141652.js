const express = require('express'),
  Session = require('express-session'),
  bodyParse = require('body-parser'),
  mongoose = require('mongoose'),
  middleware = require('connect-ensure-login'),
  FileStore = require('session-file-stor')(Session),
  config = require('./config/default'),
  flash = require('connect-flash'),
  port = 3333,
  app = express();
  
  mongoose.connect('mongodb://127.0.0.1/streaming', { useNewUrlParser: true });

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './views'));
  app.use(express.static('public'));
  app.use(flash());
  app.use(require('cookie-parser')());