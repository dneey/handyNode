const express = require('express');
const response = require('../responses');
const router = express.Router();

// Require Controllers
var AuthController = require('../controllers/AuthController');

// Auth Routes
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

router.get('/', function (req, res) {
    console.log('It worked');
    var arraydata = {'name': 'JD', 'age': '47'};
    res.send(response.success(arraydata));
});

module.exports = router;