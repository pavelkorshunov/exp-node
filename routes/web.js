const express = require('express');
const Users = require('../models/users');
const router = express.Router();

router.get('/', (req, res, next) => {
    Users.find({}, function(err, users) {
        if (err) return console.error(err);
        console.log(users);
    });
    res.render('home');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

module.exports = router;