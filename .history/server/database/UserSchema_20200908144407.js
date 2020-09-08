let mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    shortid = require('shortid'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    stream_key: String,
});

UserSchema.me