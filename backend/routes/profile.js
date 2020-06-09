const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Viewing all profiles')
})


router.post('/', (req, res) => {
    res.send('Adding profile: ' + req.body)
})

router.get('/:profileId', (req, res) => {
    res.send('Viewing a profile of id = ' + req.params.profileId)
})


module.exports = router