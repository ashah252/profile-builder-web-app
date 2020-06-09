const mongoose = require('mongoose')
var bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
    email: String,
    password: String
})

var Login = mongoose.model('logins', loginSchema)

module.exports = Login