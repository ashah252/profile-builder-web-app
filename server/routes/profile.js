const express = require('express')
const router = express.Router()
var mongoConn = require('../db/mongo-conn')

router.get('/', (req, res) => {
    console.log('Finding all profiles')
    mongoConn.Profile.find(function(err, profiles) {
        res.status(200).send(profiles)
    })
})


router.post('/', (req, res) => {
    res.send('Adding profile: ' + req.body)
})

router.get('/:profileId', (req, res) => {
    res.send('Viewing a profile of id = ' + req.params.profileId)
})


module.exports = router