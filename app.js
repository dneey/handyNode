const express = require('express');
const app = express(); 

var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


var routes = require('./routes/api');

// Apply Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);





app.listen(PORT, function () {
    console.log('now listening on port ' + PORT);
});