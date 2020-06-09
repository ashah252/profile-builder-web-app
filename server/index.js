const express = require('express')
const app = express()
const port = 4000

const indexRoutes = require('./routes/index-routes')
var frontendDir = __dirname + "/../dist/my-website"

app.use(express.json())
app.use('/api', indexRoutes)
app.use(express.static(frontendDir))


app.listen(port, () => {
    console.log("Backend Server running on port " + port)
})

module.exports = app