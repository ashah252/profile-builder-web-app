const express = require('express')
const app = express()
const port = 4000

const profileRoutes = require('./routes/profile')
const loginRoutes = require('./routes/login')

app.use(express.json())
app.use('/profile', profileRoutes)
app.use('/login', loginRoutes)

app.listen(port, () => {
    console.log("Backend Server running on port " + port)
})
