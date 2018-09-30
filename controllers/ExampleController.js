// const bcrypt = require('bcrypt');
const response = require('../responses');

/**
 * 
 */
exports.hello = function (req, res) {
    res.json({
        'message':'Your example api response.',
        'status' : '200'
    });
}