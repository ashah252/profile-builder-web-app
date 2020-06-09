const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
})

module.exports = mongoose.model('profiles', profileSchema)