const Lol = require('../models/lol');

class LolController {

  static test(req, res) {
    Lol.create({
      lalka: 'buewbw',
      isLalka: true
    })
    res.end('200');
  }
}

module.exports = LolController;