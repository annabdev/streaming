const express = require('express'),
  Session = require('express-session'),
  bodyParse = require('body-parser'),
  mongoose = require('mongoose'),
  middleware = require('connect-ensure-login'),
  FileStore = require('session-file-stor')(Session),
  config = require('./config/default'),
  flash = require('connect-flash'),
  port = 3333,
  app = express()
  passport = require();
  
  mongoose.connect('mongodb+srv://annab:W@lnut77@cluster0.fycst.mongodb.net/streaming?retryWrites=true&w=majority', { useNewUrlParser: true });

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './views'));
  app.use(express.static('public'));
  app.use(flash());
  app.use(require('cookie-parser')());
  app.use(bodyParse.urlencoded({ extended: true }));
  app.use(bodyParse.json({ extended: true }));

  app.use(Session({
      store: new FileStore({
          path : './server/sessions'
      }),
      secret: config.server.secret,
      maxAge : Date().now + ( 60 * 1000 * 30)
  }));

  app.get('*', middleware.ensureLoggedIn(), (req, res) => {
      res.render('index');
  });

  app.listen(port, () => console.log('App listening on ${port}!'));