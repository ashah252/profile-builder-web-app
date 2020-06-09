const config = require('./config')

const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.SERVER_PORT

const apiRoutes = require('./routes/api-routes')
var frontendDir = path.join(__dirname, '..', 'dist')

if (process.env.NODE_ENV != 'test') {
  app.use(logger('dev'));
}

app.use(express.json())
app.use(cookieParser());
app.use('/api', apiRoutes)

app.use(express.static(frontendDir))
app.all('*', function (req, res) {
    res.status(200).sendFile('/', {root: frontendDir});
});

app.listen(port, () => {
    console.log("Backend Server running on port " + port)
})

module.exports = app