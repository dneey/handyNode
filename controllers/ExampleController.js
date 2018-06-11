// const bcrypt = require('bcrypt');
const response = require('../responses');

/**
 * All functions are accessible to
 */
exports.hello = function (req, res) {
    res.send(response.success([],'Your example controller.'));
}