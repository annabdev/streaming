let mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    shortid = require('shortid'),
    Schema = mongoose.Schema;

let UserSchema = new Schema    