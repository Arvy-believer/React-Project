const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');

});

router.get('/login', (req, res) => {
    res.render('login');

});

router.get('/otp', (req, res) => {
    res.render('verify');

});

router.get('/verify', (req, res) => {
    res.render('verify');

});



module.exports = router;