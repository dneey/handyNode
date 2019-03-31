/**
 * This is the entry point of the application
 * 
 * The core setup of the framework
 */

const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');
const PORT = process.env.PORT || 3000;

const app = express(); 



/**
 * Applies the body Parser middleware by default to the routes
 * 
 * You can swap this out with whatever you want
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', webRoutes);
app.use('/api', apiRoutes);
app.listen(PORT, function () {
    console.log('now listening on port ' + PORT);
});
