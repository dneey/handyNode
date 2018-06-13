const bcrypt = require('bcrypt');
const response = require('../responses');
const User = require('../models/User');
var firebase = require('../firebaseConfig');
/**
 * 
 * @param {email, password} req 
 * @param {*} res 
 */
exports.signup = function (req, res){
    console.log(req.body);
    if (!req.name || !req.phoneNumber || !req.body.email || !req.body.password) {
        console.log('Unsuccessful');
        res.send(response.response([], 'Email and password are both required'));
    }
    bcrypt.hash(req.body.password, 100, function (err, hash) {
        
    });

    // var user = new User;
    var details = { 'name': req.body.name, 'phoneNumber': req.body.phoneNumber, 'email': req.body.email, 'password': hash }; // hash password
     
    // Store in firebase or mongo db


    // Send verification sms to the user to verify phone number


    // return user to home page
    
    res.send(response.success(details, 'Signup successful', '200'));
}

// Login
    exports.login = function (req, res)
    {
        if (!req.body.email || !req.body.password) {
            res.send(response.success([], 'Invalid credentials'));
            }
        res.send(response.success([], 'Login successful'));
    }