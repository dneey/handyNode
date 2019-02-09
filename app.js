/**
 * This is the entry point of the application
 * 
 * The core setup of the framework
 */

const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const routes = require('./routes/api');
const PORT = process.env.PORT || 3000;

const app = express(); 
app.engine('hbs', engines.handlebars);





/**
 * Applies the body Parser middleware by default to the routes
 * 
 * You can swap this out with whatever you want
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);





app.listen(PORT, function () {
    console.log('now listening on port ' + PORT);
});
