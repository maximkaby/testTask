const User = require('../models/User');
const bcrypt = require('bcrypt');
const Op = require('sequelize').Op;
var nodemailer = require("nodemailer");


class UserController {

  static register(req, res) {
    console.log(req.body);
    const saltRounds = 10;
    let hash = bcrypt.hashSync(String(req.body.password), saltRounds);
    let saltToken = bcrypt.genSaltSync(saltRounds);
    let token = bcrypt.hashSync('lalka', saltToken);
    let confirmToken = bcrypt.hashSync('confirm_lalka', saltToken);
    User.create({
      password: hash,
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      role: req.body.role,
      token: token,
      confirmed: false,
      confirm_token: confirmToken
    }).then(user => {
      UserController.sendMail(user.email, confirmToken);
      user.password = 'null';
      res.send(user);
    }).catch(err => res.send(err));
  }

  static login(req, res) {
    User.findOne({
      where: {
        email: String(req.body.email)
      }
    }).then(user => {
      let isAuth = bcrypt.compareSync(req.body.password, user.password);
      if (isAuth)
        res.send({
          token: user.token
        });
      else
        res.send('bad');
    }).error(err => res.send('error'));
  }

  static searchDeveloper(req, res) {
    User.findAll({
      where: {
        name: {
          [Op.like]: req.body.dev_name + '%'
        },
        surname: {
          [Op.like]: req.body.dev_surname + '%'
        }
      }
    }).then(user => {
      res.send(user);
    }).catch(err => res.send('error'));
  }

  static sendMail(email, confirmToken) {
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // hostname
        service: 'gmail',
        secureConnection: true, // use SSL
        port: 465,
        auth: {
          user: 'maximkabyit@gmail.com', // generated ethereal user
          pass: 'maxgmail123' // generated ethereal password
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: 'azazaza', // sender address
        to: email, // list of receivers
        subject: 'confirm your email', // Subject line
        html: `<a href=http://localhost:3012/confirmEmail?confirm_token=${confirmToken}>
            http://localhost:3012/confirmToken?confirm_token=${confirmToken}
        </a></b>` // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
      });
    });
  }

  static confirmEmail(req, res) {
    console.log(req.query);
    User.findOne({
      where: {
        confirm_token: req.query.confirm_token
      }
    })
    .then(user => {
      console.log(user);
      user.confirmed = true;
      user.save();
    })
    .then(err => {
      res.send(err);
    });
  }
}

module.exports = UserController;