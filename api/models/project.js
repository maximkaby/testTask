const Sequelize = require('sequelize');
const db = require('../database');

const Project = db.define('projects', {
  title: {
    type: Sequelize.STRING(255),
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING(156),
  },
  user_id: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  developers_id: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Project;