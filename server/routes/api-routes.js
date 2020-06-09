const express = require('express')
const router = express.Router()

const profileRoutes = require('./profile')
const authRoutes = require('./authenticate')

router.use('/profile', profileRoutes)
router.use('/auth', authRoutes)


module.exports = router