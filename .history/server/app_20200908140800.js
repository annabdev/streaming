const express = require('express'),
  Session = require('express-session'),
  bodyParse = require('body-parser'),
  mongoose = require('mongoose'),
  middleware = require('connect-ensure-login'),
  FileStore = require