const Sequelize = require('sequelize');

const db = new Sequelize('carousel', 'erik', '', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => console.log('connected'));

module.exports = db;