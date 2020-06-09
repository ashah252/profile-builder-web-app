const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send("logging in to: " + req.body)
})

router.get('/', (req, res) => {
    res.send("need to send post to login: ")
})


module.exports = router