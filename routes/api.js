const express = require('express');
// const response = require('../responses');
const router = express.Router();
var controller = require('../controllers/Controller'); // Require controller Register

/**
 * Here is where you register your routes,
 * Simply call the router and assign your method,
 * You can assign  a callback or simply call a controller from
 * the controller class like (controller.ExampleController.hello)
 * 
 */
// router.get('/', controller.ExampleController.hello);
router.get('/', controller.HomeController.welcome);
router.post('/signup', controller.AuthController.signup);
router.post('/login', controller.AuthController.login);



// Export the entire router to be accessed in the main app/server.js
module.exports = router;