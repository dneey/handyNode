
/**
 *  Return a simple response in json
 */
exports.welcome = function (req, res) {
    res.json({
        'message':'Hello There! Welcome to handy node',
        'status' : '200'
    });
}