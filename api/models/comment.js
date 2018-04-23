const Sequelize = require('sequelize');
const db = require('../database');

const Comment = db.define('comments', {
  message: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  task_id: {
    type: Sequelize.INTEGER
  }
});

module.exports = Comment;