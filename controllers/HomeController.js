/**
 * Home Controller --defualt
 * Returns the welcome page.
 */

exports.welcome = function (req, res) {
    // Gets the root directory
    res.sendFile(`${process.cwd()}/views/welcome.html`);

}