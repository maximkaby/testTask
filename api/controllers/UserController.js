const User = require('../models/User');
const bcrypt = require('bcrypt');
const Op = require('sequelize').Op;

class UserController {

  static test(req, res) {
    User.create({
      name: 'max'
    });

    User.findAll({
      where: {
        name: 'max'
      }
    }).then(users => {
      res.send(users);
    })
  }

  static register(req, res) {
    console.log(req.body);
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';
    let hash = bcrypt.hashSync(String(req.body.password), saltRounds);
    let saltToken = bcrypt.genSaltSync(saltRounds);
    let token = bcrypt.hashSync('lalka', saltToken);

    User.create({
      password: hash,
      email: req.body.email,
      token: token
    }).then(user => {
      res.send({
        access_token: token
      });
    }).catch(err => res.send('error'));
  }

  static searchDeveloper(req, res) {
    User.findAll({
      where: {
        name: {
          [Op.like]: req.body.name + '%'
        }
      }
    }).then(user => {
      res.send(user);
    }).catch(err => res.send('error'));
  }

}

module.exports = UserController;