const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send("logging in to: " + req.body)
})

module.exports = router