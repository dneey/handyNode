/**
 * 
 * -------------------------------------------------------------
 * 
 * This is where you register your routes.
 * 
 * Simply call the router object and assign your method.
 * 
 * You can assign  a callback or simply call a controller.
 * 
 * 
 * --------------------------------------------------------------
 */


const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controller'); // Require controller Register


router.get('/hello', controller.ExampleController.hello);
router.get('/welcome', controller.HomeController.welcome);




// Export the entire router to be accessed in the main app/server.js
module.exports = router;
