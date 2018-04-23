const Sequelize = require('sequelize');
const db = require('../database');
const Project = require('./project');

const User = db.define('users', {
  name: Sequelize.STRING(255),
  email: {
    type: Sequelize.STRING(156),
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  token: Sequelize.STRING,
  role: Sequelize.STRING,
  confirmed: Sequelize.STRING,
  confirm_token: Sequelize.STRING
});

User.belongsToMany(Project, {
  through: 'userProjects',
  foreignKey: 'user_id'
});

module.exports = User;