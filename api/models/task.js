const Sequelize = require('sequelize');
const db = require('../database');

const Task = db.define('tasks', {
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
  project_id: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Task;