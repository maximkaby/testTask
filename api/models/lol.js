const Sequelize = require('sequelize');
const db = require('../database');

// module.exports = (sequelize, DataTypes) => {
//   var Lol = sequelize.define('Lol', {
//     lalka: DataTypes.STRING
//   }, {});
//   Lol.associate = function(models) {
//     // associations can be defined here
//   };
//   return Lol;
// };

const Lol = db.define('lols', {
  lalka: Sequelize.STRING,
  isLalka: Sequelize.BOOLEAN
});

module.exports = Lol;
