var Sequelize = require('sequelize');

let sequelize = new Sequelize('testTask', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;