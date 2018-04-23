'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Tasks',
        'developer_id',
        {
          type: Sequelize.INTEGER,
          validate: {
            notEmpty: true
          }
        }
      ),
      queryInterface.addColumn(
        'Tasks',
        'status',
        {
          type: Sequelize.STRING,
          validate: {
            notEmpty: true
          }
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
