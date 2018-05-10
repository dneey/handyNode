const bcrypt = require('bcrypt');
//Pull in the responses module
const response = require('../responses');

// Login to the application

// Signup
exports.signup = function (req, res){
    if (!req.body.email || !req.body.password) {
        console.log('Unsuccessful');
        res.send(response.success([], 'Invalid credentials'));
    }
    bcrypt.hash(req.body.password, 100, function (err, hash) {
        
    });
    var details = { 'email': req.body.email, 'password': hash }; // hash password
    res.send(response.success(details, 'Signup successful', '200'));
}

// Login
exports.login = function (req, res){
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
        res.send(response.success([], 'Invalid credentials'));
    }
    res.send(response.success([], 'Login successful'));
}