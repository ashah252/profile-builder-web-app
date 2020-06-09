const config = require('../config')
const mongoose = require('mongoose')
var Login = require('./schemas/login')


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };


console.log('Connecting to MongoDB @ ' + process.env.MONGODB_URI);

dbconn = mongoose.connect(process.env.MONGODB_URI, options )
        .then(
            () => {
                console.log('Connected to MongoDB successfully')
            },
            error => {
                console.log('Connection to MongoDB failed')
                throw error;
            }
        )


module.exports = {
    dbconn,
    Login
}