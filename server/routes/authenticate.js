const express = require('express')
const dbConn = require('../db/mongo-conn')
const router = express.Router()
const bcrypt = require('bcrypt')

const ok = {"ok": 1}
const notOk = {"ok": 0}

router.post('/login', (req, res) => {
    console.log('sending email: ' + req.body.email)
    
    dbConn.Login.findOne({email: req.body.email}, function(err, userLogin) {
        
        if(userLogin && !err){
            console.log('Recieved from DB: ' + userLogin)
            if(validatePassword(req.body.password, userLogin.password)){
                console.log("Password Validation Success");
                res.status(200).send(ok)
            }
            else {
                console.log("Password Validation Failure");
                res.status(400).send(notOk)
            }
        }
        else {
            res.status(400).send(notOk)
        }
        
    })
})

router.post('/register', (req, res) => {
    dbConn.Login.findOne({email: req.body.email}, function(err, userLogin) {
        if (userLogin || err) {
            //exists
            res.status(400).send(notOk)
        }
        else {
            createSecureLogin(req.body.email, req.body.password).save()
            res.status(200).send(ok)
        }
    })
})

function validatePassword(enteredPassword, hashedPassword) {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
}

function createSecureLogin(email, password) {
    return new dbConn.Login({
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    })
}

module.exports = router