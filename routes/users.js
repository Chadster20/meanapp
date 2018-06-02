const express = require('express');
router = express.Router();
const User = require('../model/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')


// register
router.post('/register', (req, res, next) =>
{
    let newUser = new User(
        {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
    user.addUser(newUser, (err, user) =>
    {
    if(err)
    {
        res.json(
            {
                success: false, msg:'failed to register user'
            })
    }
    else
    {
        res.json(
            {
                sucess: true, msg:'User Registered!'
            })
    }
    });
});


// authenticate
router.post('/authenticate', (req, res, next) =>
{
    res.send('AUTHENTICATE');
});

// profile
router.get('/profile', (req, res, next) =>
{
    res.send('PROFILE');
});

module.exports = router;
