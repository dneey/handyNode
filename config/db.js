const Sequelize = require('sequelize');
const connection = new Sequelize('nodefeliver', 'root', '');
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

exports.connection = connection;
exports.Sequelize = Sequelize;